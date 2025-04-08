import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import MealList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const categoryId = route.params.categoryId;
  // const title = route.params.title;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
