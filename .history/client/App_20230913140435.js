import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import Navigation from "./Nav/Navigation";
import Map from "./Map/Map";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#7EAEF2" }}>
      <Navigation />
    </SafeAreaView>
  );
  <Map />;
};

export default App;
