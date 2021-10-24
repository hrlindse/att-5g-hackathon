import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FIREBASE_API_KEY,
  FIREBASE_SENDER_ID,
  FIREBASE_APP_ID,
} from "react-native-dotenv";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

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

if (!firebaseConfig) {
  initializeApp(firebaseConfig);
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
  return (
    <View style={styles.container}>
      <Text>Journey test page!</Text>
      <StatusBar style="auto" />
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
