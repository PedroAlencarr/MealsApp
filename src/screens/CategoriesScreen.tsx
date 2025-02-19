import { FlatList, View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

type RootStackParamList = {
  MealsOverview: { categoryId: string; title: string };
};

function CategorieScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  function renderCategoryItem(itemData: any) {
    function handlePress() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        title: itemData.item.title,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handlePress}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategorieScreen;
