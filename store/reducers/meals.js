import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      return index >= 0
        ? {
            ...state,
            favoriteMeals: state.favoriteMeals.filter(
              (meal) => meal.id !== action.mealId
            ),
          }
        : {
            ...state,
            favoriteMeals: [
              ...state.favoriteMeals,
              state.meals.find((meal) => meal.id === action.mealId),
            ],
          };
    case SET_FILTERS:
      const { filters } = action;

      const filteredMeals = state.meals.filter((meal) => {
        if (filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (filters.vegan && !meal.isVegan) {
          return false;
        }
        if (filters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        return true;
      });

      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
