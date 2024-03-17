import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
  limit,
} from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getAvailableLot() {
  const ref = collection(firestore, "available-lot");
  const q = query(ref, orderBy("available", "desc"), limit(10));
  const data = await getDocs(q);

  let datas = {};

  data.docs.forEach((doc) => {
    datas[doc.id] = { ...doc.data() };
  });

  return datas;
}

export async function getTime() {
  const ref = collection(firestore, "available-lot");
  const q = query(ref, orderBy("timestamp", "desc"), limit(10));
  const data = await getDocs(q);

  let datas = {};

  data.forEach((doc) => {
    datas[doc.id] = { ...doc.data() };
  });

  return datas;
}
