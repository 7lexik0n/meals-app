import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import FiltersScreen from "../screens/FiltersScreen";

const Stack = createNativeStackNavigator();

const FilterNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: "Filter Meals",
          headerLeft: () => (
            <HeaderButton
              name="ios-menu"
              size={23}
              onSelect={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerRight: () => <HeaderButton name="checkmark-done" size={23} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FilterNavigator;
