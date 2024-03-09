import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { COLORS, ITEMS, SIZES } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

export default function Stat() {
  const navigation = useNavigation();
  const parkingAvailabilityData = generateParkingData();

  function generateParkingData() {
    const days = [
      { day: "Monday", spots: [3, 5, 4, 2, 6, 7, 3, 4, 5, 6, 7, 1] },
      { day: "Tuesday", spots: [2, 4, 5, 6, 7, 3, 4, 5, 3, 6, 7, 1] },
      { day: "Wednesday", spots: [2, 4, 5, 6, 7, 3, 4, 5, 3, 6, 7, 2] },
      { day: "Thursday", spots: [2, 4, 5, 6, 7, 3, 4, 5, 3, 6, 7, 3] },
      { day: "Friday", spots: [2, 4, 5, 6, 7, 3, 4, 5, 3, 6, 7, 1] },
      { day: "Saturday", spots: [2, 4, 5, 6, 7, 3, 4, 5, 3, 6, 7, 2] },
      { day: "Sunday", spots: [2, 4, 5, 6, 7, 3, 4, 5, 3, 6, 7, 1] },
    ];

    return days.map(({ day, spots }) => ({
      day,
      availability: spots.map((spot, idx) => ({
        time: `${8 + idx}:00 - ${9 + idx}:00`,
        spots: spot,
      })),
    }));
  }

  // Function to determine car icon color based on available spots
  const getCarColor = (spots) => {
    if (spots <= 2) {
      return COLORS.green;
    } else if (spots >= 3 && spots <= 6) {
      return COLORS.yellow;
    } else {
      return COLORS.red;
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
                        <Text style={styles.spots}>{hourData.spots} / 9</Text>
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
