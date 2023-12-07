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
  const [isModalVisible, setModalVisible] = useState(false);
  const [parkingData, setParkingData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore()
          .collection("available-lot")
          .doc("your_document_id")
          .get();
        const data = snapshot.data();
        setParkingData(data);
      } catch (error) {
        console.error("Error fetching parking data:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
        <TouchableOpacity onPress={handleButtonClick} style={styles.sq}>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h2.jpeg")}
          />
          <View>
            <Text style={styles.com}>30th Computer</Text>
            <Text style={styles.des}>{`Available: ${
              parkingData.available || 0
            }`}</Text>
            <Text style={styles.timestamp}>{`Last Updated: ${
              parkingData.timestamp || "N/A"
            }`}</Text>
          </View>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.menuItem}>Description</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Motorcycle;

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
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },

  com: {
    marginLeft: 80,
    marginBottom: 60,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  sur: {
    marginLeft: 80,
    marginBottom: 60,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
