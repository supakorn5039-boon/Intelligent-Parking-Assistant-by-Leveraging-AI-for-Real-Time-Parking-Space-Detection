import firebase from "@react-native-firebase/app";
import { Platform } from 'react-native';

// Your secondary Firebase project credentials...
const androidCredentials = {
  clientId: '',
  appId: '',
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
};

// Your secondary Firebase project credentials for iOS...
const iosCredentials = {
  clientId: '',
  appId: '',
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
};

// Select the relevant credentials
const credentials = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
});

const config = {
  name: "APP_NAME",
};

await firebase.initializeApp(credentials, config);
