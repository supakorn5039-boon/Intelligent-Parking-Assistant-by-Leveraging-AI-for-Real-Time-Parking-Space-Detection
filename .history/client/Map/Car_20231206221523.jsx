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

import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { getAvailableLot } from "../firebaseConfig";

const Car = () => {
  const navigation = useNavigation();

  // 30TH Modal
  const [isModalVisible1, setModalVisible1] = useState(false);

  // Available from firebase
  const [available30th, setAvailable30th] = useState(0);

  const fetchAvailable30thFromFirebase = async () => {
    const datas = await getAvailableLot();
    console.log(datas);
    console.log(setAvailable30th(datas["30"].available));
    try {
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  useEffect(() => {
    fetchAvailable30thFromFirebase();
    let unsubscibe = setInterval(() => {
      fetchAvailable30thFromFirebase();
    }, 12 * 1000);

    return () => {
      clearInterval(unsubscibe);
    };
  }, []);

  const handleButtonClick = () => {
    setModalVisible1(true);
  };
  const handleCloseModal = () => {
    setModalVisible1(false);
  };

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
          {/* Title&Desc */}
          <Text style={styles.title}>CAR</Text>
        </View>
        {/* Com */}
        <View>
          <TouchableOpacity onPress={handleButtonClick} style={styles.sq}>
            <Image
              style={styles.img}
              source={require("../assets/Photo/com.jpg")}
            />
            <View>
              <Text style={styles.com}>30th Computer</Text>
              <Text style={styles.comA}>Available : {available30th}</Text>
            </View>
          </TouchableOpacity>

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
                <Text style={styles.menuItem}>Des1</Text>
                <TouchableOpacity onPress={handleCloseModal}>
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
    width: 120,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
  },
  imgDes: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  com: {
    marginTop: 12,
    marginLeft: 70,
    marginBottom: 30,
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },

  comA: {
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
    justifyContent:,
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
    marginTop: 15,
  },

  closeButton: {
    fontSize: 18,
    color: "red",
    marginTop: 15,
    textAlign: "center",
  },
});
