import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface headerProps {
  navigation?: any;
  title: string | null;
}

export default function HeaderPages({ navigation, title }: headerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Entypo
        name="chevron-left"
        size={34}
        color="white"
        style={styles.icon}
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: "Login" }] })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: "12%",
  },
  icon: {
    position: "absolute",
    left: "5%",
  },
  container: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
  },
});
