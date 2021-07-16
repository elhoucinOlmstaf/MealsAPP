import React from "react";

import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMscreen = ({  route}) => {

  const NewMeals = useSelector((state) => state.meals.FilterMeals);
  const Catid = route.params.catID;
  let newMealsData = NewMeals.filter((meal) => meal.CategoryId.includes(Catid));


  return (
     <MealList listData={newMealsData} />
  );
};

export default CategoryMscreen;
