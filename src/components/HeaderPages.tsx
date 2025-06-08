import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

interface headerProps {
  navigation?: any;
  title: string | null;
}

export default function HeaderPages({ navigation, title }: headerProps) {
  const route = useRoute();

  const hideScreens = ["Dispositivo"];

  const ShowLogout = !hideScreens.includes(route.name);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={ShowLogout ? "logout" : "arrow-left-thick"}
        size={34}
        color="white"
        style={styles.icon}
        onPress={() =>
          ShowLogout
            ? navigation.reset({ index: 0, routes: [{ name: "Login" }] })
            : navigation.goBack()
        }
      />
      <Text style={styles.title}>{title}</Text>
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
    left: "10%",
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
