import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View ></View>
      <Text>LoginScreen</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  head: {
    flex: 1,
  },
});
