import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FIREBASE_API_KEY, FIREBASE_SENDER_ID, FIREBASE_APP_ID } from "@env";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
// import { Barometer } from "expo-sensors";
// import Barometer from "react-native-barometer";
import Map from "./components/Map";

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "att-5g-hackathon.firebaseapp.com",
  databaseURL: "https://att-5g-hackathon.firebaseio.com",
  projectId: "att-5g-hackathon",
  storageBucket: "att-5g-hackathon.appspot.com",
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
}

// auth state listener
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out, sign in anonymously
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
});

export default function App() {
  // const isSupported = Barometer.isSupported();

  // var barPayload = 0;
  // var barPressure = 0;
  // var barStandardAlt = 0;
  // var barLocalAlt = 0;
  // var barRelativeAlt = 0;
  // var barVerticalSpeed = 0;

  // if barometer is supported
  // if (isSupported) {
  // const watchId = Barometer.watch((payload) => {
  //   barPayload = payload.timestamp;
  //   barPressure = payload.pressure;
  //   barStandardAlt = payload.altitudeASL;
  //   barLocalAlt = payload.altitude;
  //   barRelativeAlt = payload.relativeAltitude;
  //   barVerticalSpeed = payload.verticalSpeed;
  // });
  // // request updates once every second
  // Barometer.setInterval(1000);
  // Barometer.watch(success);
  // }

  return (
    <View style={styles.container}>
      <Text>Journey test page!</Text>
      <StatusBar style="auto" />
      <Map></Map>
      <script src="https://s3-eu-west-1.amazonaws.com/steerpath-web-sdk/releases/core/3.3.3/steerpath-3.3.3.min.js"></script>
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
