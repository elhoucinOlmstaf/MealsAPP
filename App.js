import React, { useState } from "react";
import RouteApp from "./routes/RouteApp";
import MealReducer from "./Redux/Reducer/MealReducer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
const RootReducer = combineReducers({
  meals: MealReducer,
});
export default function App() {
  const store = createStore(RootReducer);
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  );
}
