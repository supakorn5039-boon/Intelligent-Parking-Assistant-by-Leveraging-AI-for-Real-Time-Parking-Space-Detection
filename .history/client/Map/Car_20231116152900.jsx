import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Car = () => {
  const navigation = useNavigation();
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
        <View style={styles.sq}>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h2.jpeg")}
          />
          <View>
            <Text style={styles.com}>30th Computer</Text>
          </View>
        </View>
        <View style={styles.sq}>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h.jpeg")}
          />
          <View>
            <Text style={styles.sur}>SurveyBuilding</Text>
            <Text>SurveyBuilding</Text>
          </View>
        </View>
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
    marginBottom: 60,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  sur: {
    marginLeft: 80,s
    marginBottom: 60,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
