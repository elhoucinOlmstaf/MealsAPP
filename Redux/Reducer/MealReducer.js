import { MEALS } from "../../data/dummy-data";
const InitiateState = {
  meals: MEALS,
  FilterMeals: MEALS,
  FavoriteMeals: [],
};

import TOGGLE_FAVORITES from "../Actions/MealsActions";

const MealReducer = (state = InitiateState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      const existingState = state.FavoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingState >= 0) {
        const updatedState = [...state.FavoriteMeals];
        updatedState.splice(existingState, 1);
        return { ...state, FavoriteMeals: updatedState };
      } else {
        const FindMeals = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          FavoriteMeals: state.FavoriteMeals.concat(FindMeals),
        };
      }
    default:
      return state;
  }
};

export default MealReducer;

// Get average runtime of successful runs in seconds
