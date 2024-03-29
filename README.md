# Intelligent Parking Assistant by Leveraging AI for Real-Time Parking Space Detection

The Intelligent Parking Assistant leverages AI for real-time parking space detection. It is developed for mobile devices to monitor parking space availability in the 30Years building.

## Installation

### Requirements 
- Mobile device
- IP camera
- Expo App installed
- XCode application

### Installation Steps 

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/supakorn5039-boon/Intelligent-Parking-Assistant-by-Leveraging-AI-for-Real-Time-Parking-Space-Detection
    cd Intelligent-Parking-Assistant-by-Leveraging-AI-for-Real-Time-Parking-Space-Detection
    ```

2. **Client Folder:**
    ```bash
    cd client
    npm start
    ```

    - **When using command npm start:**
        - The screen will prompt you to choose iOS or Android to test the mobile application.
        - Change the `firebaseConfig.js` file with your Firebase configuration.

3. **Server Folder:**
    ```bash
    cd server
    ```
    - **Run The Code:**
        ```bash
        python3 filename.py
        ```

    - Don't forget to change the Image and Video in `DrawTest.py` and `Test.py` .
        ```bash
        img = cv2.imread('Your-Image.png')
        cap = cv2.VideoCapture('Your-Video.mp4')
        ```

    - **DrawTest.py:**
        - Use this script to create a rectangle to detect objects.

    - **Test.py:**
        - Use this script to view the detected screen.

    - **smart-parking.json:**
        - Change firebase configuration in this file

    - **Realtime Folder:**
        - Test your real-time application with your IP camera.
        - In `realtime.py`, use the following commands:
            ```python
            camera_url = 'Your Camera IP'
            cap = cv2.VideoCapture(camera_url)
            ```
        
5. **Test with Real Device:**
    - Connect both the mobile and computer to the same network or WiFi.
    - Open a camera and scan the QR code when running `npm start`.

## Additional Notes

Before running the code, please ensure:

- Your mobile device, IP camera, and Expo App are installed and configured correctly.
- If using Firebase, update the `firebaseConfig.js` and `smart-parking.json` files with your Firebase configuration.
- In the server folder, make sure to change the image and video files in `DrawTest.py` and `Test.py` as per your requirements.
- For real-time testing with an IP camera, configure the `realtime.py` script with the appropriate camera URL.
- Connect both the mobile and computer to the same network or WiFi before testing with a real device.
