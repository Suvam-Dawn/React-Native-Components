import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import RootStack from "./navigation/AppNavigator";
const App = createAppContainer(RootStack);
export default App;
