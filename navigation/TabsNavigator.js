import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MealsNavigator from "./MealsNavigator";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FavNavigator from "./FavNavigator";

const defaultTabOptions = {
  tabBarLabelStyle: {
    fontFamily: "open-sans",
    fontSize: 13,
  },
  tabBarActiveTintColor: Colors.accent,
  tabBarInactiveTintColor: "#fff",
  tabBarStyle: {
    backgroundColor: Colors.primary,
    paddingBottom: 5,
    paddingTop: 5,
    height: 60,
  },
};

// const Tab =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator()
//     : createBottomTabNavigator();

const Tab = createBottomTabNavigator();

const defaultTabsConfig = (
  <>
    <Tab.Screen
      name="Meals"
      component={MealsNavigator}
      options={{
        ...defaultTabOptions,
        headerShown: false,
        tabBarLabel: "All Meals",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-restaurant" size={22} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="FavNavigator"
      component={FavNavigator}
      options={{
        ...defaultTabOptions,
        headerShown: false,
        tabBarLabel: "Favorites",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-star" size={22} color={color} />
        ),
      }}
    />
  </>
);

const TabsNavigator = () => {
  return Platform.OS === "android" ? (
    <Tab.Navigator
      initialRouteName="Meals"
      shifting={true}
      barStyle={{
        backgroundColor: Colors.primary,
        fontFamily: "open-sans",
        fontSize: 14,
      }}
    >
      {defaultTabsConfig}
    </Tab.Navigator>
  ) : (
    <Tab.Navigator>{defaultTabsConfig}</Tab.Navigator>
  );
};

export default TabsNavigator;
