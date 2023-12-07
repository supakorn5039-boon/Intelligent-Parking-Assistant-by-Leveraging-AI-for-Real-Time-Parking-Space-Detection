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


const data =[
  {
    id:"1"
  }
]

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
        <Image style={styles.img} source={require("../assets/Photo/h1.jpeg")} />
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
    backgroundColor: "#B9DDF0",
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
  img: {
    marginTop: 20,
    marginLeft: 20,
    width: 100,
    height: 100,
  },
});
