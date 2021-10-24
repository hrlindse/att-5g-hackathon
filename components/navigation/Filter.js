import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import theme from "../../assets/styles/theme.style.js";

export default function Filter(props) {
  return (
    <View style={styles.container}>
      <Checkbox style={styles.checkbox}></Checkbox>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    fontFamily: theme.FONT_FAMILY_BUTTON,
    color: theme.FONT_COLOR,
    paddingHorizontal: 35,
    paddingVertical: 30,
    borderTopColor: theme.LT_GREY_COLOR,
    borderTopWidth: 3,
  },
  checkbox: {
    padding: 5,
    marginTop: 2,
    height: 20,
    width: 20,
  },
  text: {
    // color: "#FFF",
    // fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 20,
  },
});
