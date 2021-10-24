import { AuthErrorCodes } from "@firebase/auth";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function FilterButton() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.filter}
        source={require("../../assets/images/filter.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 26,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  filter: {
    width: 30,
    height: 26,
  },
});
