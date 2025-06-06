import { StyleSheet, Text, View } from "react-native";
import HeaderPages from "../components/HeaderPages";
import WaterLevel from "../components/WaterLevel";

export default function Bairro({ navigation }: any) {
  return (
    <View style={styles.container}>
      <HeaderPages title="Praça da Sé" navigation={navigation} />
      <WaterLevel level={1.1} />
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
