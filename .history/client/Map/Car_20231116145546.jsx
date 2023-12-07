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
          <Text style={styles.des}>30</Text>
          <Image
            style={styles.img}
            source={require("../assets/Photo/h2.jpeg")}
          />
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
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#E2E8DE",
    borderRadius: 20,
    marginRight: 20,
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 20,
  },
  des: {
    marginLeft: 200,
    fontSize: 20,
    color: "blue",
  },
});
