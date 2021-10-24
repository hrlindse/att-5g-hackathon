import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";
import theme from "../assets/styles/theme.style.js";
import { commonStyles } from "../assets/styles/styles";
import Map from "./Map";
import HamburgerButton from "./buttons/HamburgerButton";
import FilterButton from "./buttons/FilterButton";
import NavigateButton from "./buttons/NavigateButton";
import ActionButton from "./buttons/ActionButton";
import GetDirections from "./navigation/GetDirections";
import SOSButton from "./buttons/SOSButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <HamburgerButton></HamburgerButton>
          <Text style={commonStyles.heading}>Home</Text>
          <FilterButton></FilterButton>
        </View>
        <SOSButton></SOSButton>
      </View>
      {/* <Map></Map> */}
      <View style={styles.bottom}>
        <GetDirections></GetDirections>
        <ActionButton text="Get Directions"></ActionButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: theme.FONT_FAMILY_BUTTON,
    color: theme.FONT_COLOR_BUTTON,
    fontSize: 16,
    backgroundColor: theme.LT_GREY_COLOR,
  },
  bottom: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
});
