import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

import { navigate } from '../navigation/RootNavigation';

const MealsList = ({ listData }) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        item={item}
        onSelect={() => {
          navigate("MealDetails", {
            mealId: item.id,
            title: item.title,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={listData}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
        style={styles.mealsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  mealsList: {
    width: "100%",
  },
});

export default MealsList;
