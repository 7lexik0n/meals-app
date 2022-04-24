import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = ({ route }) => {
  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!displayedMeals.length) {
    return (
      <View style={styles.screen}>
        <DefaultText style={styles.text}>
          There is not anything according to your filters!
        </DefaultText>
      </View>
    );
  }

  return <MealsList listData={displayedMeals} />;
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

export default CategoryMealsScreen;
