import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View>
      <Text>LoginScreen</Text>
      <TextInput 
      label={}

      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
