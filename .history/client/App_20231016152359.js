import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import Navigation from "./Nav/Navigation";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F34628" }}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
