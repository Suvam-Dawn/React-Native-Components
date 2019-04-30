import React from "react";
import { Header } from "react-native-elements";
import HamburgerMenu from "./HamburgerMenu";
import color from "../constants/Colors";
const DrawerHeader = props => {
  return (
    <Header
      leftComponent={<HamburgerMenu navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: {
          fontSize: 18,
          color: "#fff",
          fontWeight: "bold",
          justifyContent: "space-around"
        }
      }}
      containerStyle={{
        height: 56,
        backgroundColor: color.primaryColor,
        justifyContent: "space-around"
      }}
    />
  );
};

export default DrawerHeader;
