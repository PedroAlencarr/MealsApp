import { StyleSheet, Text, View } from "react-native";

type SubtitleProps = {
  children: string;
};

function Subtitle({ children }: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#acf3c5",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
  },
  subtitle: {
    color: "#acf3c5",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Subtitle;
