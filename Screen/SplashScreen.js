import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from "react-native";

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    setTimeout(() => {
      this.props.navigation.replace("DrawerScreen");
    }, 500);
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../Public/image/react-native.png")}
          style={{ flex: 1 }}
          resizeMode="stretch"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
