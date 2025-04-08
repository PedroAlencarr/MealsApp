import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import CategorieScreen from "./src/screens/CategoriesScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import MealDetailScreen from "./src/screens/MealDetailScreen";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import FavoritesContextProvider from "./src/store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#54834a",
        },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#94b28d",
        },
        drawerContentStyle: {
          backgroundColor: "#54834a",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#94b28d",
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategorieScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#54834a",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#94b28d",
              },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "Meal Detail",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
