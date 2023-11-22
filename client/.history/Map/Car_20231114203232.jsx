import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Car = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={tw`text-center py-5 text-xl `}>Select a place</Text>
      </View>
    </SafeAreaView>
  );
};

export default Car;

const styles = StyleSheet.create({});
