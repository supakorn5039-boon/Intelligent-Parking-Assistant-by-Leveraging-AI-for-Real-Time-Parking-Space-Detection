import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import Navigation from "./Nav/Navigation";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EE521A" }}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
