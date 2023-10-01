import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import carIcon from "../assets/Icons/car-icon.png";

class ParkingSlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isCarPopupVisible: false, // Control car popup visibility
    };
  }

  toggleSelection = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
      isCarPopupVisible: !prevState.isCarPopupVisible, // Show/hide car popup
    }));
  };

  render() {
    const { slotName, isOccupied } = this.props;
    const { isSelected, isCarPopupVisible } = this.state;

    return (
      <TouchableOpacity
        onPress={this.toggleSelection}
        style={[styles.parkingSlot, isSelected ? styles.selectedSlot : null]}
      >
        {isCarPopupVisible && (
          <Modal transparent={true} visible={isCarPopupVisible}>
            <View style={styles.carPopup}>
              <Image source={carIcon} style={styles.carImage} />
              <Text>Car in Slot {slotName}</Text>
              <TouchableOpacity onPress={this.toggleSelection}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        )}

        <View
          style={[
            styles.carIcon,
            isSelected || isOccupied ? styles.carIconVisible : null,
          ]}
        >
          {isSelected || (isOccupied && <Image source={carIcon} />)}
        </View>
        <Text style={[styles.text, isSelected ? styles.selectedText : null]}>
          {slotName}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  parkingSlot: {
    width: 100,
    height: 50,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    position: "relative",
  },
  selectedSlot: {
    backgroundColor: "#FFD95A",
    borderColor: "#FFA500",
  },
  carIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    display: "none", // Initially hide the car icon
  },
  carIconVisible: {
    display: "flex", // Show the car icon when selected or occupied
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "#000",
  },
  carPopup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  carImage: {
    width: 100,
    height: 100,
  },
});

export default ParkingSlot;
