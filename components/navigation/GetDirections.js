import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";

export default function GetDirections() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Get Directions:</Text>
      <View style={styles.textbox}>
        <Text style={styles.source}>Your location</Text>
        <Image
          style={styles.mic}
          source={require("../../assets/images/microphone.png")}
        ></Image>
      </View>
      <View style={styles.textbox}>
        <Text style={styles.destination}>Enter seat number</Text>
        <Image
          style={styles.mic}
          source={require("../../assets/images/microphone.png")}
        ></Image>
      </View>
      {/* TODO get directions button */}
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
  source: { fontWeight: "bold" },
  destination: {},
  mic: { width: 14, height: 18 },
});
