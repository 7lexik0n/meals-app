import React from "react";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = () => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favMeals.length) {
    return (
      <View style={styles.screen}>
        <DefaultText style={styles.text}>
          There is not anything yet! Add some of your favorite meals!
        </DefaultText>
      </View>
    );
  }

  return <MealsList listData={favMeals} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default FavoritesScreen;
