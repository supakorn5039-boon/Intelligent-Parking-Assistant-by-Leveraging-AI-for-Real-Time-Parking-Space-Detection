import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

const CategoryModal = ({
  isVisible,
  onCarSelected,
  onMotorcycleSelected,
  onClose,
}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <Text>Choose a Category:</Text>
          <TouchableOpacity onPress={onCarSelected}>
            <Text>Car</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onMotorcycleSelected}>
            <Text>Motorcycle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;
