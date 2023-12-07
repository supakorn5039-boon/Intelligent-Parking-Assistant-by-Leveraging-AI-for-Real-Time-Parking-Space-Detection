import firebase from '@react-native-firebase/app';

// Your secondary Firebase project credentials...
const firebaseConfig = {
  apiKey: "AIzaSyByut0ghCCxZqhrmJnFqtTpfj9Jzt7Tgk8",
  authDomain: "smart-parking-e0f33.firebaseapp.com",
  databaseURL:
    "https://smart-parking-e0f33-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-parking-e0f33",
  storageBucket: "smart-parking-e0f33.appspot.com",
  messagingSenderId: "188404168167",
  appId: "1:188404168167:web:80528b6015288c58ae7942",
  measurementId: "G-7QLZD94X09",
};

const config = {
  name: 'SECONDARY_APP',
};

await firebase.initializeApp(credentials, config);