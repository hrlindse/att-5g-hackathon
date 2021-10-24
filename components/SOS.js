import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import theme from "../assets/styles/theme.style.js";
import { commonStyles } from "../assets/styles/styles";
import ActionButton from "./buttons/ActionButton";
import MenuItem from "./menu/MenuItem";

export default function SOS({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <View></View>
          <Text style={commonStyles.heading}>Emergency Services</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.close}
              source={require("../assets/images/close.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.items}>
        <MenuItem
          uri={require("../assets/images/phone.png")}
          text="Person Missing"
        ></MenuItem>
        <MenuItem
          uri={require("../assets/images/phone.png")}
          text="Contact Security"
        ></MenuItem>
        <MenuItem
          uri={require("../assets/images/phone.png")}
          text="Medical Emergency"
        ></MenuItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: theme.FONT_FAMILY_BUTTON,
    color: theme.FONT_COLOR_BUTTON,
    fontSize: 16,
    backgroundColor: theme.LT_GREY_COLOR,
  },
  close: {
    width: 35.25,
    height: 28.5,
  },
  items: {
    marginTop: 50,
  },
});
