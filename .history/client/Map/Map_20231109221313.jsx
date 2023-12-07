import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import Dropdown from "react-native-modal-dropdown";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as theme from "../theme/theme";
import CategoryModal from "../screens/Menu";

const { height, width } = Dimensions.get("screen");
const parkingsSpots = [
  {
    id: 1,
    title: "Car",
    price: 1,
    rating: 4.3,
    spots: 6,
    free: 2,
    coordinate: {
      latitude: 18.795181,
      longitude: 98.952838,
    },
    description: `This is a Parking for front of Computer building `,
  },
  {
    id: 2,
    title: "Bicycle",
    price: 1,
    rating: 4.3,
    spots: 10,
    free: 2,
    coordinate: {
      latitude: 18.796591,
      longitude: 98.952256,
    },
    description: `This is a Parking for front of Computer building `,
  },
];

class ParkingMap extends Component {
  state = {
    hours: {},
    active: null,
    activeModal: null,
  };

  UNSAFE_componentWillMount() {
    const { parkings } = this.props;
    const hours = {};

    parkings.map((parking) => {
      hours[parking.id] = 1;
    });

    this.setState({ hours });
  }

  handleHours = (id, value) => {
    const { hours } = this.state;
    hours[id] = value;

    this.setState({ hours });
  };

  handleParkingLotResponse = (parkingConfirmed) => {
    if (parkingConfirmed) {
      console.log("Parking confirmed.");
      this.props.navigation.navigate("Com");
    } else {
      console.log("Parking canceled.");
    }

    setTimeout(() => {
      this.setState({ activeModal: null });
    }, 500);
  };

  renderHeader() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <View style={{ flex: 1, justifyContent: "center" }}></View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          ></View>
        </View>
      </SafeAreaView>
    );
  }

  renderParking = (item) => {
    const { hours } = this.state;

    return (
      <TouchableWithoutFeedback
        key={`parking-${item.id}`}
        onPress={() => this.setState({ active: item.id })}
      >
        <View style={[styles.parking, styles.shadow]}>
          <View style={styles.hours}>
            <Text style={styles.hoursTitle}>
              X {item.spots} {item.title}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {this.renderHours(item.id)}
              <Text style={{ color: theme.COLORS.gray }}>hrs</Text>
            </View>
          </View>

          <View style={styles.parkingInfoContainer}>
            <View style={styles.parkingInfo}>
              <View style={styles.parkingIcon}>
                <Ionicons
                  name="ios-pricetag"
                  size={theme.SIZES.icon}
                  color={theme.COLORS.gray}
                />

                <Text style={{ marginLeft: theme.SIZES.base }}> Free</Text>
              </View>
              <View style={styles.parkingIcon}>
                <Ionicons
                  name="ios-star"
                  size={theme.SIZES.icon}
                  color={theme.COLORS.gray}
                />

                <Text style={{ marginLeft: theme.SIZES.base }}>
                  {" "}
                  {item.rating}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.buy}
              onPress={() => this.setState({ activeModal: item })}
            >
              <View style={styles.buyTotal}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.buyTotalPrice}>Click</Text>
                </View>
              </View>

              <View style={styles.buyBtn}>
                <FontAwesome
                  name="angle-right"
                  size={theme.SIZES.icon * 1.75}
                  color={theme.COLORS.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderParkings() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        data={this.props.parkings}
        extraData={this.state}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => this.renderParking(item)}
      />
    );
  }

  renderHours(id) {
    const { hours } = this.state;
    const availableHours = [1, 2, 3, 4, 5, 6];

    return (
      <Dropdown
        defaultIndex={0}
        options={availableHours}
        style={styles.hoursDropdown}
        defaultValue={`0${hours[id]}:00` || "01:00"}
        dropdownStyle={styles.hoursDropdownStyle}
        onSelect={(value) => this.handleHours(id, value)}
        renderRow={(option) => (
          <Text style={styles.hoursDropdownOption}>{`0${option}:00`}</Text>
        )}
        renderButtonText={(option) => `0${option}:00`}
      />
    );
  }

  renderModal() {
    const { activeModal } = this.state;

    if (!activeModal) return null;

    return (
      <Modal
        isVisible
        useNativeDriver
        style={styles.modalContainer}
        backdropColor={theme.COLORS.overlay}
        onBackButtonPress={() => this.setState({ activeModal: null })}
        onBackdropPress={() => this.setState({ activeModal: null })}
        onSwipeComplete={() => this.setState({ activeModal: null })}
      >
        <View style={styles.modal}>
          <View style={styles.modal}>
            <View>
              <Text style={{ fontSize: theme.SIZES.font * 1.5 }}>
                {activeModal.title}
              </Text>
            </View>
            <View style={{ paddingVertical: theme.SIZES.base }}>
              <Text
                style={{
                  color: theme.COLORS.gray,
                  fontSize: theme.SIZES.font * 1.1,
                }}
              >
                {activeModal.description}
              </Text>
            </View>
            <View style={styles.modalInfo}>
              <View
                style={[styles.parkingIcon, { justifyContent: "flex-start" }]}
              >
                <Ionicons
                  name="ios-pricetag"
                  size={theme.SIZES.icon * 1.1}
                  color={theme.COLORS.gray}
                />
                <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}> Free</Text>
              </View>
              <View
                style={[styles.parkingIcon, { justifyContent: "flex-start" }]}
              >
                <Ionicons
                  name="ios-star"
                  size={theme.SIZES.icon * 1.1}
                  color={theme.COLORS.gray}
                />
                <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}>
                  {" "}
                  {activeModal.rating}
                </Text>
              </View>
              <View
                style={[styles.parkingIcon, { justifyContent: "flex-start" }]}
              >
                <Ionicons
                  name="ios-pin"
                  size={theme.SIZES.icon * 1.1}
                  color={theme.COLORS.gray}
                />
                <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}>
                  {" "}
                  {activeModal.price} km
                </Text>
              </View>
              <View
                style={[styles.parkingIcon, { justifyContent: "flex-start" }]}
              >
                <Ionicons
                  name="ios-car"
                  size={theme.SIZES.icon * 1.3}
                  color={theme.COLORS.gray}
                />
                <Text style={{ fontSize: theme.SIZES.icon * 1.15 }}>
                  {" "}
                  {activeModal.free}/{activeModal.spots}
                </Text>
              </View>
            </View>
            <View style={styles.modalHours}>
              <Text style={{ textAlign: "center", fontWeight: "500" }}>
                Choose your Hours to parking here!
              </Text>
              <View style={styles.modalHoursDropdown}>
                {this.renderHours(activeModal.id)}
                <Text style={{ color: theme.COLORS.gray }}>hrs</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={styles.payBtn}
                onPress={() => this.handleParkingLotResponse(true)}
              >
                <Text style={styles.payText}>Want to see this Parking?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const { currentPosition, parkings } = this.props;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <MapView initialRegion={currentPosition} style={styles.map}>
          {parkings.map((parking) => (
            <Marker
              key={`marker-${parking.id}`}
              coordinate={parking.coordinate}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setState({ active: parking.id })}
              >
                <View
                  style={[
                    styles.marker,
                    styles.shadow,
                    this.state.active === parking.id ? styles.active : null,
                  ]}
                >
                  <Text style={styles.markerPrice}>{parking.title}</Text>
                  <Text style={styles.markerStatus}>
                    {" "}
                    ({parking.free}/{parking.spots})
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </Marker>
          ))}
        </MapView>
        {this.renderParkings()}
        {this.renderModal()}
      </View>
    );
  }
  renderCategory() {

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
}

ParkingMap.defaultProps = {
  currentPosition: {
    latitude: 18.795181,
    longitude: 98.952838,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  parkings: parkingsSpots,
};

export default ParkingMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: theme.SIZES.base * 1,
    paddingTop: theme.SIZES.base * 1,
    paddingBottom: theme.SIZES.base * 1,
  },
  headerTitle: {
    color: theme.COLORS.gray,
  },
  headerLocation: {
    fontSize: theme.SIZES.font,
    fontWeight: "500",
    paddingVertical: theme.SIZES.base / 3,
  },
  map: {
    flex: 3,
  },
  parkings: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: theme.SIZES.base * 2,
  },
  parking: {
    flexDirection: "row",
    backgroundColor: theme.COLORS.white,
    borderRadius: 6,
    padding: theme.SIZES.base,
    marginHorizontal: theme.SIZES.base * 2,
    width: width - 24 * 2,
  },
  buy: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: theme.SIZES.base * 1.5,
    paddingVertical: theme.SIZES.base,
    backgroundColor: theme.COLORS.red,
    borderRadius: 6,
  },
  buyTotal: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  buyTotalPrice: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.base,
    fontWeight: "600",
    paddingLeft: theme.SIZES.base / 4,
  },
  buyBtn: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  marker: {
    flexDirection: "row",
    backgroundColor: theme.COLORS.white,
    borderRadius: theme.SIZES.base * 2,
    paddingVertical: 12,
    paddingHorizontal: theme.SIZES.base * 2,
    borderWidth: 1,
    borderColor: theme.COLORS.white,
  },
  markerPrice: { color: theme.COLORS.red, fontWeight: "bold" },
  markerStatus: { color: theme.COLORS.gray },
  shadow: {
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  active: {
    borderColor: theme.COLORS.red,
  },
  hours: {
    flex: 1,
    flexDirection: "column",
    marginLeft: theme.SIZES.base / 2,
    justifyContent: "space-evenly",
  },
  hoursTitle: {
    fontSize: theme.SIZES.text,
    fontWeight: "500",
  },
  hoursDropdown: {
    borderRadius: theme.SIZES.base / 2,
    borderColor: theme.COLORS.overlay,
    borderWidth: 1,
    padding: theme.SIZES.base,
    marginRight: theme.SIZES.base / 2,
  },
  hoursDropdownOption: {
    padding: 5,
    fontSize: theme.SIZES.font * 0.8,
  },
  hoursDropdownStyle: {
    marginLeft: -theme.SIZES.base,
    paddingHorizontal: theme.SIZES.base / 2,
    marginVertical: -(theme.SIZES.base + 1),
  },
  parkingInfoContainer: { flex: 1.5, flexDirection: "row" },
  parkingInfo: {
    justifyContent: "space-evenly",
    marginHorizontal: theme.SIZES.base * 1.5,
  },
  parkingIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modal: {
    flexDirection: "column",
    height: height * 0.75,
    padding: theme.SIZES.base * 2,
    backgroundColor: theme.COLORS.white,
    borderTopLeftRadius: theme.SIZES.base,
    borderTopRightRadius: theme.SIZES.base,
  },
  modalInfo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: theme.SIZES.base,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.COLORS.overlay,
    borderBottomColor: theme.COLORS.overlay,
  },
  modalHours: {
    paddingVertical: height * 0.11,
  },
  modalHoursDropdown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: theme.SIZES.base,
  },
  payBtn: {
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.SIZES.base * 1.5,
    backgroundColor: theme.COLORS.red,
  },
  payText: {
    fontWeight: "600",
    fontSize: theme.SIZES.base * 1.5,
    color: theme.COLORS.white,
  },
});
