import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import theme from "../../assets/styles/theme.style.js";
import { commonStyles } from "../../assets/styles/styles";
import ActionButton from "../buttons/ActionButton";
import LoginEntry from "./LoginEntry";
import Checkbox from "expo-checkbox";
import CarouselComp from "react-native-snap-carousel";
import CarouselItem, { sliderWidth, itemWidth } from "./CarouselItem";

export default function Login() {
  onboardSlides = {
    activeIndex: 0,
    carouselItems: [
      {
        uri: "../../assets/images/back.png",
        text: "Text 1",
      },
      {
        uri: "../../assets/images/back.png",
        text: "Text 2",
      },
      {
        uri: "../../assets/images/back.png",
        text: "Text 3",
      },
    ],
  };
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <Image
            style={styles.backButton}
            source={require("../../assets/images/back.png")}
          ></Image>
          <Text style={commonStyles.heading}>Login</Text>
          <View></View>
        </View>
      </View>
      <CarouselComp
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={carouselItems}
        renderItem={CarouselItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
      <View style={styles.bottom}>
        <LoginEntry></LoginEntry>
        <ActionButton text="Submit"></ActionButton>
        <View style={styles.termsContainer}>
          <Checkbox style={styles.checkbox}></Checkbox>
          <Text style={styles.terms}>Agree to the terms and conditions</Text>
        </View>
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
  backButton: {
    width: 21,
    height: 31,
  },
  bottom: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
  termsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  checkbox: {
    padding: 5,
  },
  terms: {
    width: "fit-content",
    paddingLeft: 10,
  },
});
