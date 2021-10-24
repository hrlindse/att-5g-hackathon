import { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function SOSButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "fit-content",
    // height: 50,
    fontFamily: theme.FONT_FAMILY_BUTTON,
    backgroundColor: theme.SOS_COLOR,
    alignSelf: "flex-end",
    textAlign: "center",
    paddingVertical: 9,
    paddingHorizontal: 17,
    marginTop: 21,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // right: 0,
  },
  text: {
    fontFamily: theme.FONT_FAMILY_BUTTON,
    color: theme.FONT_COLOR_BUTTON,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "none",
  },
});
