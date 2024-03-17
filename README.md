# Intelligent Parking Assistant by Leveraging AI for Real-Time Parking Space Detection

The Intelligent Parking Assistant leverages AI for real-time parking space detection. It is developed for mobile devices to monitor parking space availability in the 30Years building.

## Installation

### Requirements 
- Mobile device
- IP camera
- Expo App installed

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

    **2.1 When using command npm start:**
    - The screen will prompt you to choose iOS or Android to test the mobile application.
    - Change the `firebaseConfig.js` file with your Firebase configuration.

3. **Server Folder:**
    ```bash
    cd server
    ```

    Don't forget to change the Image and Video files in `DrawTest.py` and `Test.py`.

    **3.1 DrawTest.py:**
    - Use this script to create a rectangle to detect objects.

    **3.2 Test.py:**
    - Use this script to view the detected screen.

    **3.3 Realtime Folder:**
    - Test your real-time application with your IP camera.
    - In `realtime.py`, use the following commands:
        ```python
        camera_url = 'Your Camera IP'
        cap = cv2.VideoCapture(camera_url)
        ```

4. **Test with Real Device:**
    - Connect both the mobile and computer to the same network or WiFi.
    - Open a camera and scan the QR code when running `npm start`.
