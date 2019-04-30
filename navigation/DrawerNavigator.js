import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  NavigationActions,
  createMaterialTopTabNavigator,
  StackRouter
} from "react-navigation";
import color from "../constants/Colors";
import HomeScreen from "../Screen/HomeScreen";

const CustomDrawerComponent = props => {
  const topMenu = {
    ...props,
    items: props.items.filter((item, index) => (index < 7 ? item : ""))
  };
  const bottomMenu = {
    ...props,
    items: props.items.filter((item, index) => (index > 6 ? item : ""))
  };
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={color.primaryDarkColor}
      />
      <ScrollView>
        <View
          style={{
            backgroundColor: color.primaryColor,
            width: "100%",
            height: 170
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../Public/image/react-native.png")}
              style={{
                width: 90,
                height: 90,
                margin: 10,
                resizeMode: "contain"
              }}
            />
            <Text
              style={{
                color: color.white,
                flex: 1,
                marginTop: 5,
                fontWeight: "bold"
              }}
            >
              React Native Tutorial
            </Text>
            <Text
              style={{
                color: color.white,
                flex: 1,
                marginTop: 2,
                fontWeight: "bold"
              }}
            >
              Developed by Suvam Dawn
            </Text>
          </View>
        </View>

        <DrawerItems {...topMenu} />
        {/* <DrawerHeader /> */}
        <DrawerItems {...bottomMenu} />
      </ScrollView>
    </SafeAreaView>
  );
};
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    intialRouteName: "Home",
    // drawerType: "front",
    drawerType: "slide",
    drawerPosition: "left",
    // drawerLockMode: "locked-closed",

    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: color.primaryColor,
      inactiveTintColor: color.primaryLightColor
    }
  }
);

const navigator = createAppContainer(DrawerNavigator);
export default navigator;
