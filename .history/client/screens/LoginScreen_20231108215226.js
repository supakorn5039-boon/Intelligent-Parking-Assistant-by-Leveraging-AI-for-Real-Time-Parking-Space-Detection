import { View, Text } from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
