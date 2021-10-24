import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import theme from "../../assets/styles/theme.style.js";
import { commonStyles } from "../../assets/styles/styles";
import ActionButton from "../buttons/ActionButton";
import Filter from "./Filter";

export default function Filters({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <View></View>
          <Text style={commonStyles.heading}>Filter Locations</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.close}
              source={require("../../assets/images/close.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filters}>
        <Filter text="Locate friends"></Filter>
        <Filter text="Exit doors"></Filter>
        <Filter text="Food courts"></Filter>
        <Filter text="Restrooms"></Filter>
        <Filter text="Events in the stadium"></Filter>
      </View>

      <View style={styles.bottom}>
        <ActionButton text="Apply Filter"></ActionButton>
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
  filters: {
    marginTop: 50,
  },
  bottom: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
});
