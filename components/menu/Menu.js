import { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";
import { commonStyles } from "../../assets/styles/styles";
import ActionButton from "../buttons/ActionButton";
import MenuItem from "./MenuItem";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <View></View>
          <Text style={commonStyles.heading}>Menu</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.close}
              source={require("../../assets/images/close.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.items}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <MenuItem
            uri={require("../../assets/images/locate.png")}
            text="Locate your friends and family"
          ></MenuItem>
        </TouchableOpacity>
        <MenuItem
          uri={require("../../assets/images/light.png")}
          text="Flash a light to guide your friend"
        ></MenuItem>
        <MenuItem
          uri={require("../../assets/images/feedback.png")}
          text="Give feedback"
        ></MenuItem>
        <MenuItem
          uri={require("../../assets/images/offers.png")}
          text="Check offers"
        ></MenuItem>
        <MenuItem
          uri={require("../../assets/images/settings.png")}
          text="Settings"
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
  bottom: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
});
