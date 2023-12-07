import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

const Car = () => {
  const navigation = useNavigation();
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [parkingData1, setParkingData1] = useState({});
  const [parkingData2, setParkingData2] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot1 = await firestore()
          .collection("available-lot")
          .doc("30th_computer")
          .get();
        const data1 = snapshot1.data();
        setParkingData1(data1);

        const snapshot2 = await firestore()
          .collection("available-lot")
          .doc("survey_building")
          .get();
        const data2 = snapshot2.data();
        setParkingData2(data2);
      } catch (error) {
        console.error("Error fetching parking data:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick1 = () => {
    setModalVisible1(true);
  };

  const handleButtonClick2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal1 = () => {
    setModalVisible1(false);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeftIcon size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>CAR</Text>
      </View>

      <View>
        <TouchableOpacity onPress={handleButtonClick1} style={styles.sq}>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h2.jpeg")}
          />
          <View>
            <Text style={styles.com}>30th Computer</Text>
            <Text style={styles.des}>{`Available: ${
              parkingData1.available || 0
            }`}</Text>
          </View>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible1}
          onRequestClose={handleCloseModal1}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.menuItem}>Des1</Text>
              <TouchableOpacity onPress={handleCloseModal1}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        <TouchableOpacity onPress={handleButtonClick2} style={styles.sq}>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h.jpeg")}
          />
          <View>
            <Text style={styles.sur}>SurveyBuilding</Text>
            <Text style={styles.des}>{`Available: ${
              parkingData2.available || 0
            }`}</Text>
          </View>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible2}
          onRequestClose={handleCloseModal2}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.menuItem}>Des2</Text>
              <TouchableOpacity onPress={handleCloseModal2}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Car;

//CSS

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#91EE88",
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 16,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#C9E3F1",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
  },
  title: {
    marginLeft: 120,
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
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },
  com: {
    marginLeft: 70,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
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
    alignItems: "center",
  },

  modalContent: {
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  menuItem: {
    fontSize: 18,
    marginBottom: 15,
  },

  closeButton: {
    fontSize: 18,
    color: "red",
    marginTop: 15,
    textAlign: "center",
  },
});
