import { View, Text } from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState(null);
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
