import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";

import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Computer",
    image: require("../assets/Photo/h2.jpeg"),
  },
  {
    id: "2",
    title: "Survey",
    image: require("../assets/Photo/h2.jpeg"),
  },
];

const Car = () => {
  const navigation = useNavigation();
  return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <ArrowLeftIcon size={25} color="black" />
          <Text style={styles.title}>CAR</Text>
          <Image source={item.image} />
      )}
    />
        </TouchableOpacity>
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
