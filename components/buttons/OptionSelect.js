import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";

export default function OptionsSelect() {
  return (
    <View style={styles.container}>
      <Text>Option select component (full width)</Text>
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
