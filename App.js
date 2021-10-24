import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FIREBASE_API_KEY, FIREBASE_SENDER_ID, FIREBASE_APP_ID } from "@env";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
// import { Barometer } from "expo-sensors";
// import Barometer from "react-native-barometer";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./components/Map";
import Home from "./components/Home";
import Filters from "./components/navigation/Filters";
import Menu from "./components/menu/Menu";
import SOS from "./components/SOS";
import Login from "./components/login/Login";

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

const Stack = createNativeStackNavigator();

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
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Filters" component={Filters} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SOS" component={SOS} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
});
