import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import FilterSwitch from "../components/FilterSwitch";
import HeaderButton from "../components/HeaderButton";
import { setFilters } from "../store/actions/meals";

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const filters = {
    glutenFree: isGlutenFree,
    lactoseFree: isLactoseFree,
    vegan: isVegan,
    vegetarian: isVegetarian,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          name="checkmark-done"
          size={23}
          onSelect={() => {
            dispatch(setFilters(filters));
          }}
        />
      ),
    });
  }, [navigation, isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  const toggleSwitch = (value, setCallback) => {
    setCallback(!value);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={() => toggleSwitch(isGlutenFree, setIsGlutenFree)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={() => toggleSwitch(isLactoseFree, setIsLactoseFree)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={() => toggleSwitch(isVegan, setIsVegan)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={() => toggleSwitch(isVegetarian, setIsVegetarian)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FiltersScreen;
