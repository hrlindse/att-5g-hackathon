import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";

export const sliderWidth = Dimensions.get("window").width + 80;
export const itemWidth = Math.round(sliderWidth * 0.7);
// export const sliderWidth = 150;
// export const itemWidth = 100;

const CarouselItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.data.uri} />
      <Text style={styles.text}>{props.data.text}</Text>
      <Text style={styles.text}>{props.data.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    fontFamily: theme.FONT_FAMILY_BUTTON,
    width: itemWidth,
    // paddingBottom: 40,
    elevation: 7,
    transform: "translateY(90px)",
  },
  image: {
    width: "60%",
    height: "auto",
    padding: 5,
    marginTop: 2,
    overflow: "display",
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingTop: 20,
    color: theme.FONT_COLOR,
    textAlign: "center",
  },
});

export default CarouselItem;
