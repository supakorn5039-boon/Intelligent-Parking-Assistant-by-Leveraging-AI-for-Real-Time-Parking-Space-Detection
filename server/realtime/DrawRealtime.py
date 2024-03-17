import cv2
import pickle
import numpy as np

width, height = 100, 70
angle = 90

try:
    with open('carParkPos.pkl', 'rb') as f:
        try:
            posList, colorList, angleList = pickle.load(f)
        except (ValueError, EOFError):
            posList, colorList, angleList = [], [], []
except FileNotFoundError:
    posList, colorList, angleList = [], [], []


def mouseClick(events, x, y, flags, params):
    global posList, colorList, angleList

    if events == cv2.EVENT_LBUTTONDOWN:  # Left Click to create a Rectangle
        posList.append((x, y))
        colorList.append((255, 0, 255))  # Default color is purple
        angleList.append(angle)  # Default angle is 0 degrees
    elif events == cv2.EVENT_RBUTTONDOWN:  # Right Click to Delete a Rectangle
        for i, pos in enumerate(posList):
            x1, y1 = pos
            if x1 < x < x1 + width and y1 < y < y1 + height:
                posList.pop(i)
                colorList.pop(i)
                angleList.pop(i)

    # Save the updated posList, colorList, and angleList to the file after each change
    with open('carParkPos.pkl', 'wb') as f:
        pickle.dump((posList, colorList, angleList), f)


img = cv2.imread('Your-Image.jpg')


cv2.namedWindow("Image", cv2.WINDOW_NORMAL)
cv2.imshow("Image", img)
cv2.setMouseCallback("Image", mouseClick)

while True:
    img_copy = img.copy()
    for pos, color, angle in zip(posList, colorList, angleList):
        if len(pos) == 2 and len(color) == 3:
            # Rotate the rectangle before drawing
            rotated_rect = cv2.minAreaRect(
                np.int0(cv2.boxPoints(((pos[0], pos[1]), (width, height), angle))))
            box = np.int0(cv2.boxPoints(rotated_rect))
            cv2.drawContours(img_copy, [box], 0, color, 2)

    cv2.imshow("Image", img_copy)
    key = cv2.waitKey(1)

    if key == 27: 
        break

cv2.destroyAllWindows()
