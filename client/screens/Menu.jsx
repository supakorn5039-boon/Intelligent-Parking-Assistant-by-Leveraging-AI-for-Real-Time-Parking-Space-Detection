import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`h-full bg-blue-200`}>
      <View style={tw`p-5`}>
        <Image
          source={require("../image/transport.png")}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            marginBottom: "5%",
          }}
        />
      </View>

      <Text style={styles.selected}>Selected the Vehicle</Text>
      <View style={styles.headerBox}>
        <TouchableOpacity
          style={styles.Carbox}
          onPress={() => navigation.navigate("Car")}
        >
          <Image style={styles.car} source={require("../image/parking.png")} />
          <Text style={styles.TextCar}>Car Parking</Text>
        </TouchableOpacity>

        {/* <View style={styles.Bikebox}>
          <Image style={styles.Bike} source={require("../image/moped.png")} />
          <Text style={styles.ComingSoon}>Coming Soon..</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  selected: {
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  Carbox: {
    backgroundColor: "#C1BEC0",
    padding: 10,
    marginLeft: "6%",
    borderRadius: 16,
  },

  car: {
    width: 130,
    height: 120,
  },

  TextCar: {
    fontWeight: "bold",
    textAlign: "center",
  },

  // Bikebox: {
  //   backgroundColor: "#C1BEC0",
  //   alignSelf: "flex-end",
  //   padding: 12,
  //   marginRight: "8%",
  //   borderRadius: 16,
  // },

  // Bike: {
  //   width: 130,
  //   height: 120,
  // },

  // ComingSoon: {
  //   fontSize: 14,
  //   color: "red",
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },
});
