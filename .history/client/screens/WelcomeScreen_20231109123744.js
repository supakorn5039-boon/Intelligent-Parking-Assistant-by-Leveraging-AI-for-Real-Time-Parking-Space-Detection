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
import { themeColors } from "../theme/index";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME TO SMART PARKING</Text>

        <View style={styles.imageContainer}>
          <Image source={require("../Images/)} style={styles.image} />
        </View>

        <View style={styles.VS}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.space}
          >
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.AR}>
          <Text style={styles.TextAr}> Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.FL}> LOGIN </Text>
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
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
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
    backgroundColor: "#FFD95A",
    marginHorizontal: 24,
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
