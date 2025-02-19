import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

function CategoryGridTile({ title, color, onPress }: CategoryGridTileProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "right",
  },
});

export default CategoryGridTile;
