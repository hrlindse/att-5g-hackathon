import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FIREBASE_API_KEY, FIREBASE_SENDER_ID, FIREBASE_APP_ID } from "@env";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { Barometer } from "expo-sensors";

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
  const [data, setData] = useState({});

  // Subscribe for updates to the barometer.
  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = Barometer.addListener((barometerData) => {
      setData(barometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
  const { pressure = 0, relativeAltitude = 0, verticalSpeed = 0 } = data;

  return (
    <View style={styles.container}>
      <Text>Journey test page!</Text>
      <StatusBar style="auto" />
      <Text>Barometer:</Text>
      <Text>Pressure: {pressure * 100} Pa</Text>
      <Text>Vertical speed: {verticalSpeed}</Text>
      <Text>
        Relative Altitude:{" "}
        {Platform.OS === "ios"
          ? `${relativeAltitude} m`
          : `Only available on iOS`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
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
