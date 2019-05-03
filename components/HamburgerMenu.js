import React from "react";
import { Icon } from "react-native-elements";
import color from "../constants/Colors";
const HamburgerMenu = props => {
  return (
    <Icon
      color={color.white}
      reverseColor="transparent"
      name="menu"
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default HamburgerMenu;
