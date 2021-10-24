import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HamburgerButton from "./buttons/HamburgerButton";
import FilterButton from "./buttons/FilterButton";
import NavigateButton from "./buttons/NavigateButton";
import SOSButton from "./buttons/SOSButton";
import {
  SmartMapView,
  SmartMapManager,
} from "react-native-steerpath-smart-map";
import { SMARTMAP_API_KEY } from "@env";

export default function Map() {
  //   SmartMapManager.start(SMARTMAP_API_KEY);
  return (
    <View style={styles.container}>
      <Text>Map test page!</Text>
      <StatusBar style="auto" />
      <HamburgerButton></HamburgerButton>
      <SOSButton></SOSButton>
      <FilterButton></FilterButton>
      <NavigateButton></NavigateButton>

      {/* <SmartMapView style={{ flex: 1 }} apiKey={SMARTMAP_API_KEY} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
