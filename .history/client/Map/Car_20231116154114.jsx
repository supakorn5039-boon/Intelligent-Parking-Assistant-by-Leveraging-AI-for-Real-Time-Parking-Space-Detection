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

const Car = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
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
          <TouchableOpacity style={styles.sq}>
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
            visible={isModalVisible}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {/* Your menu content here */}
                <Text style={styles.menuItem}>Menu Item 1</Text>
                <Text style={styles.menuItem}>Menu Item 2</Text>
                <Text style={styles.menuItem}>Menu Item 3</Text>

                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <TouchableOpacity onPress={handleButtonClick} style={styles.sq}>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h.jpeg")}
          />
          <View>
            <Text style={styles.sur}>SurveyBuilding</Text>
            <Text>SurveyBuilding</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Car;

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

  button: {
    fontSize: 18,
    color: "blue",
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust opacity as needed
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    width: "8100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 15,
  },
  closeButton: {
    fontSize: 18,
    color: "red",
    marginTop: 15,
  },
});
