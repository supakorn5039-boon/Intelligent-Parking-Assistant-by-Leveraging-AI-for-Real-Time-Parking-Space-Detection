import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { COLORS, ITEMS, SIZES } from "../theme/theme";

// Function to generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Mock parking availability data for demonstration
const generateParkingData = () => {
  const hours = Array.from({ length: 14 }, (_, i) => i + 8); // Generate hours from 8am to 10pm (22:00)
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return days.map((day) => ({
    day,
    availability: hours.map((hour) => ({
      time: `${hour}:00 - ${hour + 1}:00`,
      spots: getRandomNumber(0, 10), // Generate random number of available spots (0 to 10)
    })),
  }));
};

export default function Stat() {
  const navigation = useNavigation();
  const parkingAvailabilityData = generateParkingData();

  // Function to determine car icon color based on available spots
  const getCarColor = (spots) => {
    if (spots <= 2) {
      return COLORS.red;
    } else if (spots >= 3 && spots <= 6) {
      return COLORS.yellow;
    } else {
      return COLORS.green;
    }
  };

  return (
    <View style={ITEMS.container}>
      <SafeAreaView>
        <View style={ITEMS.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={ITEMS.backButton}
          >
            <ArrowLeftIcon size={SIZES.arrow} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={ITEMS.title}>STATS</Text>
        </View>
        <ScrollView>
          <View style={styles.table}>
            {parkingAvailabilityData.map((dayData, index) => (
              <View key={index} style={styles.dayContainer}>
                <Text style={styles.dayHeader}>{dayData.day}</Text>
                <View>
                  {dayData.availability.map((hourData, idx) => (
                    <View key={idx} style={styles.row}>
                      <Text style={styles.cell}>{hourData.time}</Text>
                      <View style={styles.cell}>
                        <Text style={styles.spots}>{hourData.spots}</Text>
                        <CarIcon color={getCarColor(hourData.spots)} />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// Car icon component with color prop
const CarIcon = ({ color }) => (
  <View style={[styles.carIcon, { backgroundColor: color }]}>
    <Text style={styles.carText}>🚗</Text>
  </View>
);

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  cell: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
  },
  spots: {
    marginRight: 5,
  },
  carIcon: {
    marginLeft: 5,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: "center",
    justifyContent: "center",
  },
  carText: {
    fontSize: 20,
  },
});
