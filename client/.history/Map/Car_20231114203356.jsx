import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Car = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Icon name="chevron-left" type="flex-grow" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl `}>Select a Place</Text>
      </View>
    </SafeAreaView>
  );
};

export default Car;

const styles = StyleSheet.create({});
