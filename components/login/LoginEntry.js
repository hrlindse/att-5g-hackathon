import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";

export default function LoginEntry() {
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.name}>Enter name</Text>
      </View>
      <View style={styles.textbox}>
        <Text style={styles.phone}>Enter phone number</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    shadowOffset: 4,
    shadowColor: theme.FONT_COLOR,
    // alignItems: "center",
    // justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    paddingVertical: 8,
  },
  textbox: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    backgroundColor: theme.LT_GREY_COLOR,
    margin: 4,
    borderRadius: 6,
  },
  name: {},
  phone: {},
  mic: { width: 14, height: 18 },
});
