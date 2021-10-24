import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import theme from "../../assets/styles/theme.style.js";

export default function MenuItem(props) {
  //   const source = require(props.uri);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.uri}></Image>
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
  image: {
    padding: 5,
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
  },
});
