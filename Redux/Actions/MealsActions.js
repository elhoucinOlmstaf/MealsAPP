export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ToggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITES, mealId: id };
};
