import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";

export default function GetDirections() {
  return (
    <View style={styles.container}>
      <Text>Get Directions component</Text>
      {/* TODO x to close */}
      {/* TODO start point */}
      {/* TODO destination */}
      {/* TODO get directions button */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
