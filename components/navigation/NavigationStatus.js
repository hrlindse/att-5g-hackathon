import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native";

export default function NavigationStatus() {
  return (
    <View style={styles.container}>
      <Text>Navigation status component</Text>
      {/* TODO eta */}
      {/* TODO distance */}
      {/* TODO level */}
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
