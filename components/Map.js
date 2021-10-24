import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Map() {
  var apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOiJiYXNlOnI7c3RlZXJwYXRoX3N0YXRpYzpyO3N0ZWVycGF0aF9keW5hbWljOnIiLCJtZXRhQWNjZXNzIjoieSIsImp0aSI6IjhlNTA2OWRhLTViNDEtNGYxZS1iYjYzLTE3NmE0Y2FjMDcyOCIsInN1YiI6InN0ZWVycGF0aCIsImVkaXRSaWdodHMiOiIiLCJlaWRBY2Nlc3MiOiJ5In0.in8zIUm_ZlVhmYPhRMsMxShlqCH0nJnof0kRlWyKuQw";

  let styleFile = "default.json";

  var styleUrl =
    "https://mapdata.eu.steerpath.com/style/" +
    styleFile +
    "?access_token=" +
    apiKey;

  var mapboxMap = new mapboxgl.Map({
    container: "mapboxMap",
    style: styleUrl,
    center: [24.81249496, 60.22095443],
    zoom: 18,
    customAttribution:
      '© <a target="_blank" href="https://www.steerpath.com/">Steerpath</a>',
  });

  //create instance of SteerpathMap
  var steerpathMap = new steerpath.SteerpathMap(mapboxMap, apiKey);
  //create floor switcher control and add it to the map
  var floorSwitcher = new steerpath.FloorSwitcherControl(steerpathMap);
  mapboxMap.addControl(floorSwitcher, "bottom-right");

  return (
    <View style={styles.container}>
      <Text>Map test page!</Text>
      <StatusBar style="auto" />
      <div id="mapboxMap"></div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
