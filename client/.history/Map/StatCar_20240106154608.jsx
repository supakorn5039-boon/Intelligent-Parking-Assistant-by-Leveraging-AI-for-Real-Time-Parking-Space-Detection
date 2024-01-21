import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";

const StatCar = ({ data }) => {
  const maxValue = Math.max(...data.map((entry) => entry.value));
  const barWidth = 25;
  const svgHeight = 120;

  return (
    <View style={styles.container}>
      <Svg height={svgHeight} width={data.length * (barWidth + 5)}>
        {data.map((entry, index) => (
          <Rect
            key={index}
            x={index * (barWidth + 5)}
            y={svgHeight - (entry.value / maxValue) * svgHeight}
            width={barWidth}
            height={(entry.value / maxValue) * svgHeight}
          />
        ))}
      </Svg>
      <View style={styles.legendContainer}>
        {data.map((entry, index) => (
          <Text key={index} style={styles.legendText}>
            {entry.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: "row", // Align the legend horizontally
  },
  legendText: {
    fontSize: 13,
    color: "black",
    marginLeft: 6,
  },
});

export default StatCar;
