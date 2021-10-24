import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";

export const sliderWidth = Dimensions.get("window").width + 80;
export const itemWidth = Math.round(sliderWidth * 0.7);

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image style={styles.image} source={item.uri}></Image>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    fontFamily: theme.FONT_FAMILY_BUTTON,
    color: theme.FONT_COLOR,
    paddingHorizontal: 35,
    paddingVertical: 30,
    borderTopColor: theme.LT_GREY_COLOR,
    borderTopWidth: 3,
  },
  image: {
    padding: 5,
    marginTop: 2,
    height: 20,
    width: 20,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
  },
});

export default CarouselItem;
