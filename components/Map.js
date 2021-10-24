import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
      <Text>Map test page!</Text>
      {/* <StatusBar style="auto" /> */}

      {/* <SmartMapView style={{ flex: 1 }} apiKey={SMARTMAP_API_KEY} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.LT_GREY_COLOR,
  },
});
