import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import {
  SmartMapView,
  SmartMapManager,
} from "react-native-steerpath-smart-map";
import { SMARTMAP_API_KEY } from "@env";
import theme from "../assets/styles/theme.style.js";

export default function Map() {
  //   SmartMapManager.start(SMARTMAP_API_KEY);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/Lucas-oil-level-1-bw.png")}
      />
      {/* <StatusBar style="auto" /> */}

      {/* <SmartMapView style={{ flex: 1 }} apiKey={SMARTMAP_API_KEY} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  image: { width: 300, height: 500 },
});
