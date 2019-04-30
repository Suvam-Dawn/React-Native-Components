import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  NavigationActions,
  createMaterialTopTabNavigator,
  StackRouter
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import color from "../constants/Colors";
import SplashScreen from "../Screen/SplashScreen";
import DrawerScreen from "./DrawerNavigator";
const RootStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    DrawerScreen: {
      screen: DrawerScreen,
      navigationOptions: {
        header: null
      }
      //   navigationOptions: ({ navigation }) => ({
      //     title: "Home",
      //     headerStyle: {
      //       backgroundColor: color.primaryColor
      //     },
      //     headerTintColor: color.white,
      //     headerTitleStyle: {
      //       fontWeight: "bold",
      //       color: color.white
      //     },
      //     animationEnabled: true,
      //     headerLeft: <DrawerButton navigation={navigation} />
      //   })
    }
  },
  {
    initialRouteName: "SplashScreen",
    /* The header config is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: color.primaryColor
      },
      headerTintColor: color.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      },
      animationEnabled: true
    }
  }
);
const DrawerButton = props => {
  if (props.navigation.state.isDrawerOpen) {
    icon = "arrow-left";
  } else {
    icon = "bars";
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (props.navigation.state.isDrawerOpen) {
            props.navigation.closeDrawer();
            icon = "bars";
          } else {
            props.navigation.openDrawer();
            icon = "arrow-left";
          }
        }}
      >
        <Icon
          name={icon}
          size={22}
          color={color.white}
          style={{
            paddingLeft: 10
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default RootStack;
