import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Car() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.rightButton}
        >
          <ArrowRightIcon size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.TC}>
          This is a Parking for Car ,It's a new Building{" "}
        </Text>
      </View>
      <View style={styles.tableContainer}>
        <Text style={styles.GC}>A</Text>
        <View style={styles.line} />
        <Text style={styles.GC1}>B</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7EAEF2",
  },
  tableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
  },
  backButton: {
    backgroundColor: "#FFD95A",
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 8,
  },
  rightButton: {
    backgroundColor: "#FFD95A",
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginLeft: 335,
  },
  TC: {
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
    color: "#36D",
    fontWeight: "bold",
    fontSize: 18,
  },
  GC: {
    color: "green",
    fontSize: 28,
    width: 215,
    height: 150,
    backgroundColor: "#dddef1",
    paddingTop: 50,
    textAlign: "center",
  },
  GC1: {
    color: "green",
    fontSize: 28,
    width: 215,
    height: 150,
    backgroundColor: "#dddef1",
    paddingTop: 50,
    textAlign: "center",
  },
  line: {
    height: 150,
    width: 10,
    backgroundColor: "black",
  },
});
