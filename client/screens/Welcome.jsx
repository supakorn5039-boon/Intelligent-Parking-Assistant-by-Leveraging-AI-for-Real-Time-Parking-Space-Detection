import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../theme/theme";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME TO SMART PARKING</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../image/parking.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.VS}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Menu")}
            style={styles.space}
          >
            <Text style={styles.textSign}>Let's Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 16,
    marginBottom: 16,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
  space: {
    paddingVertical: 12,
    paddingHorizontal: 0,
    backgroundColor: COLORS.yellow,
    marginHorizontal: 24,
    marginBottom: 50,
    borderRadius: 20,
  },
  textSign: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    fontSize: 22,
  },

  VS: {
    marginVertical: 4,
  },

  AR: {
    flexDirection: "row",
    justifyContent: "center",
  },
  TextAr: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 16,
  },
  FL: {
    fontWeight: "600",
    color: "#8746EF",
    fontSize: 20,
    marginBottom: 50,
    textDecorationLine: "underline",
  },
});
