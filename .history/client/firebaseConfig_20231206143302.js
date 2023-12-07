import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore,collection,getDocs} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByut0ghCCxZqhrmJnFqtTpfj9Jzt7Tgk8",
  authDomain: "smart-parking-e0f33.firebaseapp.com",
  databaseURL: "https://smart-parking-e0f33-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-parking-e0f33",
  storageBucket: "smart-parking-e0f33.appspot.com",
  messagingSenderId: "188404168167",
  appId: "1:188404168167:web:80528b6015288c58ae7942",
  measurementId: "G-7QLZD94X09"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getData() {
  const ref = collection(firestore,'available-lot');
  const data = await getDocs(ref);
  console.log(d);
}
