import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Car = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeftIcon size={20} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl `}>Select a Place</Text>
      </View>
    </SafeAreaView>
  );
};

export default Car;

const styles = StyleSheet.create({});
