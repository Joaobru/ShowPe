import { StatusBar } from "expo-status-bar";
import React from "react";
import App from "./App";
import "react-native-gesture-handler";

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f5f5f5" />
      <App />
    </>
  );
}
