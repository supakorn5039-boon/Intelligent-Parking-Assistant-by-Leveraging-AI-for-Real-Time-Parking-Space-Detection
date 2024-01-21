import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import {
  getAvailableLot,
  getAvailableLot1,
  getAvailableLot2,
} from "../firebaseConfig";

//StatBar
import StatCar from "./StatCar";

const initialWeeklyData = [
  { label: "Sun", value: 10 },
  { label: "Mon", value: 15 },
  { label: "Tue", value: 8 },
  { label: "Wed", value: 20 },
  { label: "Thu", value: 12 },
  { label: "Fri", value: 18 },
  { label: "Sat", value: 5 },
];

const Car = () => {
  // StatBar
  const [weeklyData, setWeeklyData] = useState(initialWeeklyData);

  const navigation = useNavigation();

  // Modal
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);

  // Available from firebase
  const [available30th, setAvailable30th] = useState(0);
  const [availableSurvey, setAvailableSurvey] = useState(0);
  const [availablePro, setAvailablePro] = useState(0);

  // Fetching
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

  useEffect(() => {
    const fetData = async () => {
      await fetchAvailable30thFromFirebase();
      await fetchAvailableSurveyFromFirebase();
      await fetchAvailableProFromFirebase();
    };
    fetData();
    const unsubscribe = setInterval(fetData, 6 * 1000);
    return () => {
      clearImmediate(unsubscribe);
    };
  }, []);

  const handleButtonClick = () => setModalVisible1(true);
  const handleCloseModal = () => setModalVisible1(false);
  const handleButtonClick1 = () => setModalVisible2(true);
  const handleCloseModal1 = () => setModalVisible2(false);
  const handleButtonClick2 = () => setModalVisible3(true);
  const handleCloseModal2 = () => setModalVisible3(false);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          {/* GoBack */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ArrowLeftIcon size={25} color="black" />
          </TouchableOpacity>

          {/* Go Forward */}

          <TouchableOpacity
            onPress={() => navigation.navigate("Car")}
            style={styles.backButton}
          >
            <ArrowRightIcon size={25} color="black" />
          </TouchableOpacity>

          {/* Title&Desc */}

          <Text style={styles.title}>MotorCycle</Text>
        </View>

        {/* Com 30th */}

        <View>
          <TouchableOpacity onPress={handleButtonClick} style={styles.sq}>
            <Image
              style={styles.img}
              source={require("../assets/Photo/com.jpg")}
            />
            <View>
              <Text style={styles.com}>30th Computer</Text>
              <Text style={styles.comA}>
                Available:
                <Text
                  style={{
                    ...styles.comA,
                    color: available30th < 52 ? "red" : "green",
                  }}
                >
                  {available30th}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Survey */}

          <TouchableOpacity onPress={handleButtonClick1} style={styles.sq}>
            <Image
              style={styles.img}
              source={require("../assets/Photo/test1.avif")}
            />
            <View>
              <Text style={styles.survey}>Survey</Text>
              <Text style={styles.comA}>
                Available:
                <Text
                  style={{
                    ...styles.comA,
                    color: availableSurvey < 14 ? "red" : "green",
                  }}
                >
                  {availableSurvey}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Professor */}

          <TouchableOpacity onPress={handleButtonClick2} style={styles.sq}>
            <Image
              style={styles.img}
              source={require("../assets/Photo/car3.png")}
            />
            <View>
              <Text style={styles.pro}>Professor</Text>
              <Text style={styles.comA}>
                Available:
                <Text
                  style={{
                    ...styles.comA,
                    color: availablePro < 20 ? "red" : "green",
                  }}
                >
                  {availablePro}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Modal 30th */}

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible1}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image
                  style={styles.imgDes}
                  source={require("../assets/Photo/com.jpg")}
                />
                <Text style={styles.comAD}>
                  Available :{" "}
                  <Text
                    style={{
                      color: available30th < 52 ? "red" : "green",
                    }}
                  >
                    {available30th}
                  </Text>
                </Text>

                <View style={styles.bar}>
                  <StatCar data={weeklyData} />
                </View>

                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Modal Survey */}

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible2}
            onRequestClose={handleCloseModal1}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image
                  style={styles.imgDes}
                  source={require("../assets/Photo/test1.avif")}
                />
                <Text style={styles.comAD}>
                  Available :{" "}
                  <Text
                    style={{ color: availableSurvey < 14 ? "red" : "green" }}
                  >
                    {availableSurvey}
                  </Text>
                </Text>

                <View
                  style={{
                    ...styles.bar,
                    color: weeklyData < 12 ? "red" : "green",
                  }}
                >
                  <StatCar data={weeklyData} />
                </View>

                <TouchableOpacity onPress={handleCloseModal1}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Modal Professor */}

          <Modal
            transparent={true}
            animationType="slide"
            visible={isModalVisible3}
            onRequestClose={handleCloseModal2}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image
                  style={styles.imgDes}
                  source={require("../assets/Photo/car3.png")}
                />
                <Text style={styles.comAD}>
                  Available :{" "}
                  <Text style={{ color: availablePro < 20 ? "red" : "green" }}>
                    {availablePro}
                  </Text>
                </Text>

                <View
                  style={{
                    ...styles.bar,
                    color: weeklyData < 12 ? "red" : "green",
                  }}
                >
                  <StatCar data={weeklyData} />
                </View>

                <TouchableOpacity onPress={handleCloseModal2}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Car;

//CSS

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#EED188",
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 16,
    marginTop: 20,
  },

  NextButton: {
    backgroundColor: "#EED188",
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 16,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#B5C0EF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
  },
  title: {
    marginLeft: 90,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 18,
  },
  sq: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4B4A4D",
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  img: {
    width: 150,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
  },
  imgDes: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 100,
  },
  com: {
    marginTop: 15,
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  pro: {
    marginTop: 15,
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  survey: {
    marginTop: 15,
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  comA: {
    marginLeft: 50,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  comAD: {
    marginLeft: 150,
    marginBottom: 30,
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },

  des: {
    marginLeft: 70,
    color: "white",
  },
  sur: {
    marginLeft: 70,
    marginBottom: 45,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },

  modalContent: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  bar: {
    marginLeft: 100,
  },

  menuItem: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
  },

  closeButton: {
    fontSize: 18,
    color: "red",
    marginTop: 80,
    textAlign: "center",
  },
});
