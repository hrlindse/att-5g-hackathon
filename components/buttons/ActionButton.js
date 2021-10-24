import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";
import theme from "../../assets/styles/theme.style.js";

export default function ActionButton(props) {
  return (
    <View style={styles.actionButton}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
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
