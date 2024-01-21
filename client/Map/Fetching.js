import {
    getAvailableLot,
    getAvailableLot1,
    getAvailableLot2,
  } from "../firebaseConfig";

  // Available from firebase
  const [available30th, setAvailable30th] = useState(0);
  const [availableSurvey, setAvailableSurvey] = useState(0);
  const [availablePro, setAvailablePro] = useState(0);


const fetchAvailable30thFromFirebase = async () => {
  const datas = await getAvailableLot();
  console.log(datas);
  console.log(setAvailable30th(datas["30"].available));
  try {
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
};

const fetchAvailableSurveyFromFirebase = async () => {
  const datas = await getAvailableLot1();
  console.log(datas);
  console.log(setAvailableSurvey(datas["survey"].available));
  try {
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
};

const fetchAvailableProFromFirebase = async () => {
  const datas = await getAvailableLot2();
  console.log(datas);
  console.log(setAvailablePro(datas["pro"].available));
  try {
  } catch (error) {
    console.error("Error fetching data from Firebase: ", error);
  }
};

export default {
  fetchAvailable30thFromFirebase,
  fetchAvailableProFromFirebase,
  fetchAvailableSurveyFromFirebase,
};
