import { StyleSheet, Text, View } from "react-native";
import HeaderPages from "../components/HeaderPages";

export default function Bairro({ navigation }: any) {
  return (
    <View style={styles.container}>
      <HeaderPages title="Praça da Sé" navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#49607D",
    paddingBottom: 40,
  },
});
