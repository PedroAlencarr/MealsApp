import { useContext } from "react";

import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorite-context";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.fallbackText}>No favorite meals found!</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 18,
    color: "white",
  },
});
