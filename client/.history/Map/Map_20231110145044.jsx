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


