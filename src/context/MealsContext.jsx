import React, { createContext, useState } from "react";

export const MealContext = createContext();

export default function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MealContext.Provider
      value={{
        meals,
        setMeals,
        isLoading,
        setIsLoading,
        reviews,
        setReviews,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
