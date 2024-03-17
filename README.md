# Intelligent Parking Assistant by Leveraging AI for Real-Time Parking Space Detection

The Intelligent Parking Assistant by Leveraging AI for Real-Time Parking Space Detection is developed for mobile devices to monitor the availability of parking spaces in the 30Years building.

## Installation

### Requirements 
- Mobile
- IP camera
- Expo App installed

### Installation Steps 

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/supakorn5039-boon/Intelligent-Parking-Assistant-by-Leveraging-AI-for-Real-Time-Parking-Space-Detection
    cd Intelligent-Parking-Assistant-by-Leveraging-AI-for-Real-Time-Parking-Space-Detection
    ```

2. **client Folder:**
    ```bash
    cd client
    npm start
    ```

    **2.1 When using command npm start:**
    - The screen will prompt you to choose iOS or Android to test the mobile application.
    - Change in file `firebaseConfig.js` with your Firebase
      

3. **server Folder:**
    ```bash
    cd server
    ```

    Don't forget to change Image and Video in `DrawTest.py` and `Test.py`

    **3.1 DrawTest.py:**
    - To create a rectangle to detect objects.

    **3.2 Test.py:**
    - To view the detected screen.

    **3.3 realtime folder:**
       - To test your realtime application with you ip camera
       - In realtime.py will have command 
        `camera_url = 'Your Camera IP'
         cap = cv2.VideoCapture(camera_url)` 

      

5. **Test with Real Device:**
    - Connect both the mobile and computer to the same network or wifi.
    - Open a camera and scan the QR code when running `npm start`.
