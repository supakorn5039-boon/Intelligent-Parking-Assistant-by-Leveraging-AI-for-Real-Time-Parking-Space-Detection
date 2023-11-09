import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View >
    <Image />
      <Text>LoginScreen</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        label="Password"
        value={password}
        right={<TextInput.Icon icon="eye" />}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Pressed
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  head: {
    flex: 1,
  },
});
