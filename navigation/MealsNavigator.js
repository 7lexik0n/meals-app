import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import HeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

const MealsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
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
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerLeft: () => (
            <HeaderButton
              name="ios-menu"
              size={23}
              onSelect={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleAlign: "left",
          headerRight: () => <HeaderButton name="ios-star-outline" size={23} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
