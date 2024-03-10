import cv2
import pickle
import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime
import numpy as np
import time
import pytz

# Define global variables
width, height = 90, 70  # Define width and height

threshold = 420
firebase_update_interval = 10   # Update interval in seconds

# Initialize Firebase
cred = credentials.Certificate("smart-parking-e0f33-firebase-adminsdk-g8j23-ba95d55480.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Function to get the current time in Thailand's timezone
def get_current_time_in_thailand():
    # Set the timezone to Thailand
    thailand_timezone = pytz.timezone('Asia/Bangkok')
    # Get the current time in UTC
    utc_now = datetime.utcnow()
    # Convert the UTC time to Thailand's timezone
    thailand_now = utc_now.replace(tzinfo=pytz.utc).astimezone(thailand_timezone)
    return thailand_now

def checkParkingSpace(imgPro, imgOriginal, posList):
    emptyCount = 0  # Initialize the count of empty (green) rectangles
    fullCount = 0  # Initialize the count of full (red) rectangles

    # Unpack the tuple and get the list of positions and angles
    positions, _, angles = posList

    for pos, angle in zip(positions, angles):
        x, y = pos
        imgCrop = imgPro[y:y + height, x:x + width]  # Use width and height
        # cv2.imshow(str(x*y), imgCrop)
        count = cv2.countNonZero(imgCrop)

        # Adjust the threshold value here based on your requirements
        if count < threshold:
            color = (0, 255, 0)  # Green
            thickness = 3
            emptyCount += 1
        else:
            color = (0, 0, 255)  # Red
            thickness = 3
            fullCount += 1

        # Draw the count of pixels above threshold
        cv2.putText(imgOriginal, f"Count: {count}",
                    (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)

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
# cap = cv2.VideoCapture(camera_url)


with open('carParkPos.pkl', 'rb') as f:
    posList = pickle.load(f)

print("Loaded posList:", posList)

# Timestamp for the last Firebase update
last_firebase_update_time = time.time()

# Detect the Object
while True:
    if cap.get(cv2.CAP_PROP_POS_FRAMES) == cap.get(cv2.CAP_PROP_FRAME_COUNT):
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

    success, img = cap.read()
    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (3, 3), 1)

    if not success:
        # End of video or video cannot be read.
        break

    img_copy = img.copy() 

    img_hsv = cv2.cvtColor(img_copy, cv2.COLOR_BGR2HSV)
    saturation = img_hsv[:, :, 1]  # Saturation channel
    imgThreshold = cv2.adaptiveThreshold(imgBlur,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY_INV,25,16)

    empty_count = checkParkingSpace(imgThreshold, img_copy, posList)  # Pass height parameter

    current_time = time.time()
    time_difference = current_time - last_firebase_update_time
    
    if time_difference >= firebase_update_interval:
        try:
            doc_ref = db.collection('available-lot').document('30')
            doc_ref.set({
                'available': empty_count,
                'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            })

            print("Document added successfully.")

            query = db.collection('available-lot').order_by('timestamp', direction=firestore.Query.DESCENDING)
            documents = query.get()

            latest_doc_id = None

            for i, document in enumerate(documents):
                if i == 0:
                    latest_doc_id = document.id
                else:
                    db.collection('available-lot').document(document.id).delete()

            print(f"Previous documents deleted. Latest document ID: {latest_doc_id}")

            last_firebase_update_time = current_time
        except Exception as e:
            print("Error:", str(e))

    cv2.imshow("Image", img_copy)
    cv2.imshow("ImageBlue", imgBlur)
    cv2.imshow("ImageThreshold", imgThreshold)

    if cv2.waitKey(30) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
