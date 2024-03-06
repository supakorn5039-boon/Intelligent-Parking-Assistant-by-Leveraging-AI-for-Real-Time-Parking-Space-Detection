import cv2
import pickle
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime
import numpy as np
import time

width, height = 70, 30
angle = 90

threshold = 2
firebase_update_interval = 10  # Update interval in seconds

# Initialize Firebase
cred = credentials.Certificate(
    "smart-parking-e0f33-firebase-adminsdk-g8j23-ba95d55480.json")
firebase_admin.initialize_app(cred)
db = firestore.client()


def checkParkingSpace(imgPro, imgOriginal, posList):
    emptyCount = 0  # Initialize the count of empty (green) rectangles
    fullCount = 0  # Initialize the count of full (red) rectangles

    # Unpack the tuple and get the list of positions and angles
    positions, _, angles = posList

    for pos, angle in zip(positions, angles):
        x, y = pos
        imgCrop = imgPro[y:y + height, x:x + width]
        count = cv2.countNonZero(imgCrop)

        # Adjust the threshold value here based on your requirements
        if count < threshold:
            color = (0, 255, 0)  # Green
            thickness = 1
            emptyCount += 1
        else:
            color = (0, 0, 255)  # Red
            thickness = 1
            fullCount += 1

        # Rotate the rectangle before drawing
        rotated_rect = cv2.minAreaRect(
            np.int0(cv2.boxPoints(((x, y), (width, height), angle))))
        box = np.int0(cv2.boxPoints(rotated_rect))
        cv2.drawContours(imgOriginal, [box], 0, color, thickness)

    # Calculate the total count of parking spaces
    totalCount = emptyCount + fullCount

    # Display the counts of empty, full, and total parking spaces on the original image
    cv2.putText(imgOriginal, f"Free: {emptyCount}/{totalCount}",
                (20, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    return emptyCount  # Return the count of empty spaces


# video feed
cap = cv2.VideoCapture('real.mp4')


# camera_url = 'rtsp://admin:12345678@172.20.10.3:10554/tcp/av0_0'
# camera_url = 'rtsp://admin:12345678@192.168.2.11:10554/tcp/av0_0'


# Create a VideoCapture object
# cap = cv2.VideoCapture(camera_url)


with open('carParkPos', 'rb') as f:
    posList = pickle.load(f)

print("Loaded posList:", posList)

# Timestamp for the last Firebase update
last_firebase_update_time = time.time()

# Detect the Object
while True:
    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    success, img = cap.read()

    if not success:
        # End of video or video cannot be read.
        break

    img_copy = img.copy()  # Create a copy of the frame to draw rectangles on

    # Preprocess the image - Convert to HSV and threshold on the saturation channel
    img_hsv = cv2.cvtColor(img_copy, cv2.COLOR_BGR2HSV)
    saturation = img_hsv[:, :, 1]  # Saturation channel
    _, imgThreshold = cv2.threshold(saturation, 100, 255, cv2.THRESH_BINARY)

    # Pass imgThreshold, img_copy, and posList as arguments
    empty_count = checkParkingSpace(imgThreshold, img_copy, posList)

    # Check if 10 seconds have passed since the last Firebase update
    current_time = time.time()
    if current_time - last_firebase_update_time >= firebase_update_interval:
        try:
            # Add data with a unique identifier as the document ID
            doc_ref = db.collection('available-lot').document('30')
            doc_ref.set({
                'available': empty_count,
                'timestamp': firestore.SERVER_TIMESTAMP
            })

            print("Document added successfully.")

            # Remove previous documents (except the latest one)
            query = db.collection(
                'available-lot').order_by('timestamp', direction=firestore.Query.DESCENDING)
            documents = query.get()

            # Keep track of the latest document ID
            latest_doc_id = None

            for i, document in enumerate(documents):
                if i == 0:
                    # Save the ID of the latest document
                    latest_doc_id = document.id
                else:
                    # Delete previous documents
                    db.collection(
                        'available-lot').document(document.id).delete()

            print(
                f"Previous documents deleted. Latest document ID: {latest_doc_id}")

            last_firebase_update_time = current_time  # Update the last update time
        except Exception as e:
            print("Error:", str(e))

    cv2.imshow("Image", img_copy)

    # Wait for a small delay (e.g., 30 milliseconds) and check if 'q' is pressed to exit.
    if cv2.waitKey(30) & 0xFF == ord('q'):
        break

# Release the VideoCapture and close all OpenCV windows.
cap.release()
cv2.destroyAllWindows()
