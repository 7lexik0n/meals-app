import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

import DrawerNavigator from "./navigation/DrawerNavigator";

const reducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(reducer);

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (fontsError) {
    return (
      <View style={styles.container}>
        <Text>Fonts loading error: ${fontsError.message}</Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <DrawerNavigator />
      <StatusBar style="light" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
