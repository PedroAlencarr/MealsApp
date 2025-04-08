import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

type IconButtonProps = {
  onPress: () => void;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
};

function IconButton({ icon, color, onPress }: IconButtonProps) {
  const [pressedColor, setPressedColor] = useState(color);

  function pressHandler() {
    setPressedColor((prev) => (prev === color ? color : color));
    onPress();
  }

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={pressedColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
