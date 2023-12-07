import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const Car = () => {
  const navigation = useNavigation();

  // 30TH Modal
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const handleButtonClick = () => {
    setModalVisible1(true);
  };
  const handleButtonClick2 = () => {
    setModalVisible2(true);
  };
  const handleCloseModal = () => {
    setModalVisible1(false);
  };
  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
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
              source={require("../assets/Photo/h2.jpeg")}
            />
            <View>
              <Text style={styles.com}>30th Computer</Text>
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
              <DirectionsCarIcon/>
                <Text style={styles.menuItem}>Des1</Text>
                <Text style={styles.menuItem}>Des2</Text>
                <Text style={styles.menuItem}>Des3</Text>

                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* Survey */}
        <View>
          <TouchableOpacity onPress={handleButtonClick2} style={styles.sq}>
            <Image
              style={styles.img}
              source={require("../assets/Photo/h.jpeg")}
            />
            <View>
              <Text style={styles.sur}>SurveyBuilding</Text>
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
                <Text style={styles.menuItem}>Des1</Text>
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
    marginLeft: 80,
    marginBottom: 65,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  sur: {
    marginLeft: 80,
    marginBottom: 55,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
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
