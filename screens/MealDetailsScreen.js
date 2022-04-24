import React, { useLayoutEffect } from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";
import HeaderButton from "../components/HeaderButton";

const ListItem = (props) => (
  <View style={props.index % 2 === 0 ? styles.listItem : styles.listItemOdd}>
    <DefaultText style={props.index % 2 === 0 ? null : styles.listText}>
      {props.children}
    </DefaultText>
  </View>
);

const MealDetailsScreen = ({ navigation, route }) => {
  const { mealId } = route.params;
  const availableMeals = useSelector((state) => state.meals.meals);
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(mealId));
  };

  const isFavoriteMeals = favoriteMeals.some((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          name={isFavoriteMeals ? "ios-star" : "ios-star-outline"}
          size={23}
          onSelect={toggleFavoriteHandler}
        />
      ),
    });
  }, [navigation, mealId, isFavoriteMeals]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText style={styles.detailsText}>
          {selectedMeal.duration}min
        </DefaultText>
        <DefaultText style={styles.detailsText}>
          {selectedMeal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText style={styles.detailsText}>
          {selectedMeal.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <ListItem key={ingredient} index={index}>
          {ingredient}
        </ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={step} index={index}>
          {step}
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: Colors.accent,
  },
  detailsText: {
    color: "#fff",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 21,
    textAlign: "center",
    marginVertical: 15,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#fafafa",
  },
  listItemOdd: {
    padding: 10,
    backgroundColor: Colors.accent,
  },
  listText: {
    color: "#fff",
  },
});

export default MealDetailsScreen;
