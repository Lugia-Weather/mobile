import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HeaderPages from "../components/HeaderPages";
import WaterLevel from "../components/WaterLevel";
import { SensorItemProps } from "../components/Sensor";

type ParamList = {
  Dispositivo: SensorItemProps;
};

// Anotação importante para mim. RouteProp serve para tipar os parâmetos de uma rota
type DispositivoRouteProp = RouteProp<ParamList, "Dispositivo">;

export default function Dispositivo() {
  const route = useRoute<DispositivoRouteProp>();
  const { id_modulo, rua, data_instalacao, leituras, navigation } =
    route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderPages title={id_modulo} navigation={navigation} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.blueText}>Rua: </Text>
          <Text style={styles.whiteText}>{rua}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.blueText}>Data de instalação: </Text>
          <Text style={styles.whiteText}>{data_instalacao}</Text>
        </View>
        <Text style={styles.blueText}>Histórico de leituras</Text>
        <View>
          <Text style={styles.whiteText}>{leituras}</Text>
        </View>
      </View>
      <View style={styles.waterContainer}>
        <WaterLevel level={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49607D",
    paddingBottom: 40,
  },
  header: {
    flexShrink: 1,
    alignSelf: "flex-start",
    marginBottom: 450,
  },
  contentContainer: {
    alignItems: "center",
    position: "absolute",
    width: "100%",
    top: "25%",
    gap: "30",
  },
  blueText: {
    color: "#0AFAFA",
    fontSize: 18,
  },
  whiteText: {
    color: "white",
    fontSize: 18,
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  waterContainer: {
    bottom: "12%",
  },
});
