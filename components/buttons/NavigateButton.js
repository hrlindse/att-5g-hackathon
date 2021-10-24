import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import theme from "../../assets/styles/theme.style.js";

export default function NavigateButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Directions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: theme.FONT_FAMILY_BUTTON,
    color: theme.FONT_COLOR_BUTTON,

    backgroundColor: theme.PRIMARY_COLOR,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    textAlign: "center",
    padding: 15,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
