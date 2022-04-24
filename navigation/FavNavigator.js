import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

const FavNavigator = ({ navigation }) => {
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
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Your Favorites",
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
        name="MealDetails"
        component={MealDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTitleAlign: "left",
          headerRight: () => (
            <HeaderButton
              name="ios-star-outline"
              size={23}
              onSelect={() =>
                console.log(
                  `Mark as favorite! Meals ID => ${route.params.mealId}`
                )
              }
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default FavNavigator;
