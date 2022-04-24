import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsNavigator from "./TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";
import Colors from "../constants/Colors";
import FilterNavigator from "./FilterNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 15,
          },
          drawerStyle: {
            backgroundColor: Colors.accent,
          },
          drawerActiveTintColor: Colors.primary,
          drawerInactiveTintColor: "#fff",
          drawerType: "back",
        }}
      >
        <Drawer.Screen
          name="Main"
          component={TabsNavigator}
          options={{
            drawerLabel: "Meals",
          }}
        />
        <Drawer.Screen
          name="FiltersNavigator"
          component={FilterNavigator}
          options={{
            drawerLabel: "Filters",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
