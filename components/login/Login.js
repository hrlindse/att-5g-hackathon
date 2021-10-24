import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ActionButton from "../buttons/ActionButton";
import LoginEntry from "./LoginEntry";
import Checkbox from "expo-checkbox";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselItem, { sliderWidth, itemWidth } from "./CarouselItem";

//styles
import theme from "../../assets/styles/theme.style.js";
import { commonStyles } from "../../assets/styles/styles";

export default function Login() {
  const [carousel, setCarousel] = useState();
  const carouselItems = [
    {
      uri: require("../../assets/images/login-1.png"),
      text: "Locate your loved ones at any given point",
    },
    {
      uri: require("../../assets/images/login-2.png"),
      text: "Navigate to your seat seamlessly",
    },
    {
      uri: require("../../assets/images/login-3.png"),
      text: "Stay updated with all the offers in the stadium",
    },
  ];

  //   const isCarousel = useRef(null);
  const [activeSlide, setActiveSlide] = useState();

  function _renderItem({ item, index }) {
    return <CarouselItem data={item} />;
  }

  // function getPagination() {
  //   const { entries, activeSlide } = useState;
  //   return (
  //     <Pagination
  //       carouselRef={carousel}
  //       tappableDots="true"
  //       dotsLength={carouselItems.length}
  //       activeDotIndex={activeSlide}
  //       dotStyle={{
  //         width: 15,
  //         height: 15,
  //         borderRadius: 10,
  //         marginHorizontal: -5,
  //         backgroundColor: theme.SECONDARY_COLOR,
  //       }}
  //       inactiveDotOpacity={0.5}
  //     />
  //   );
  // }

  return (
    <View style={styles.container}>
      <View style={commonStyles.topBarContainer}>
        <View style={commonStyles.topBar}>
          <Image
            style={styles.backButton}
            source={require("../../assets/images/back.png")}
          />
          <Text style={commonStyles.heading}>Login</Text>
          <View></View>
        </View>
      </View>
      <View style={styles.carousel}>
        <Carousel
          ref={(c) => {
            setCarousel(c);
          }}
          data={carouselItems}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => setActiveSlide(index)}
          loop="true"
        />
        <Pagination
          carouselRef={carousel}
          tappableDots="true"
          dotsLength={carouselItems.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            marginHorizontal: -5,
            backgroundColor: theme.SECONDARY_COLOR,
          }}
          inactiveDotOpacity={0.5}
        />
        {/* <CarouselComp
          style={styles.carouselComp}
          layout="default"
          ref={isCarousel}
          data={carouselItems}
          renderItem={CarouselItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        /> */}
      </View>

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
  carousel: {
    // marginTop: 50,
    height: 250,
    borderTopWidth: 3,
    borderTopColor: theme.LT_GREY_COLOR,
    backgroundColor: "#fff",
    // width: "100vw",
  },
  carouselComp: {
    // height: 300,
    // paddingTop: 80,
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
