import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import CategoryModal from "../screens/"; // Import the CategoryModal component

const MapPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showCategoryModal = () => {
    setModalVisible(true);
  };

  const handleCarSelected = () => {
    // Handle the car selection
    // You can navigate or update the state as needed
    setModalVisible(false);
  };

  const handleMotorcycleSelected = () => {
    // Handle the motorcycle selection
    // You can navigate or update the state as needed
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Text>Map Page Content</Text>
      <Button title="Choose Category" onPress={showCategoryModal} />
      <CategoryModal
        isVisible={modalVisible}
        onCarSelected={handleCarSelected}
        onMotorcycleSelected={handleMotorcycleSelected}
        onClose={closeModal}
      />
    </View>
  );
};

export default MapPage;
