import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from "react-native";
import DrawerHeader from "../components/DrawerHeader";
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {};
  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader
          navigation={this.props.navigation}
          title="Home"
        />
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
