import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";

export default function LocationInfo() {
  return (
    <View style={styles.container}>
      <Text>Location info</Text>
      {/* TODO name */}
      {/* TODO distance */}
      {/* TODO navigate option */}
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
