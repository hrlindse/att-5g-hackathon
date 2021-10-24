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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <TouchableOpacity
            title="Menu"
            onPress={() => navigation.navigate("Menu")}
          >
            <HamburgerButton></HamburgerButton>
          </TouchableOpacity>
          <Text style={commonStyles.heading}>Home</Text>
          <TouchableOpacity
            title="Filters"
            onPress={() => navigation.navigate("Filters")}
          >
            <FilterButton></FilterButton>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          title="SOS"
          onPress={() => navigation.navigate("SOS")}
        >
          <SOSButton></SOSButton>
        </TouchableOpacity>
      </View>
      {/* <Map></Map> */}
      {/* <View style={styles.placeholder}></View> */}
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
  placeholder: {
    height: "100vh",
    width: "100vw",
  },
  bottom: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
});
