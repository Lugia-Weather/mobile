import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HeaderPages from "../components/HeaderPages";
import WaterLevel from "../components/WaterLevel";
import { Leitura, SensorItemProps } from "../components/Sensor";
import { FlatList } from "react-native";

type ParamList = {
  Dispositivo: SensorItemProps;
};

// Anotação importante para mim. RouteProp serve para tipar os parâmetos de uma rota
type DispositivoRouteProp = RouteProp<ParamList, "Dispositivo">;

export default function Dispositivo() {
  function getStatusStyle(status: Leitura["status"]) {
    switch (status) {
      case "seguro":
        return { color: "#7ed957" };
      case "alerta":
        return { color: "#ffb300" };
      case "risco de alagamento":
        return { color: "#e74c3c" };
      default:
        return { color: "#fff" };
    }
  }

  const route = useRoute<DispositivoRouteProp>();
  const { id_modulo, rua, data_instalacao, leituras, navigation } =
    route.params;
  const waterLevel = Math.random() * 2;

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
        <View style={styles.waterContainer}>
          <WaterLevel level={waterLevel} />
        </View>
        <View style={styles.leiturasContainer}>
          <Text style={styles.blueText}>Histórico de leituras</Text>
          <FlatList
            data={leituras}
            renderItem={({ item }) => (
              <View style={styles.leituraItem}>
                <Text style={[styles.status, getStatusStyle(item.status)]}>
                  {item.status.toUpperCase()}
                </Text>
                <Text style={styles.whiteText}>Nível: {item.nivel_cm} cm</Text>
                <Text style={styles.dataLeitura}>Data: {item.data}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.whiteText}>Nenhuma leitura disponível.</Text>
            }
            style={{ maxHeight: 220 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
    marginBottom: 720,
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
    bottom: "5%",
  },
  leituraItem: {
    marginVertical: 6,
    padding: 8,
    backgroundColor: "#34495e",
    borderRadius: 8,
  },
  status: {
    fontWeight: "bold",
    fontSize: 16,
  },
  dataLeitura: {
    color: "#aaa",
    fontSize: 12,
  },
  leiturasContainer: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 16,
    maxHeight: 260,
  },
});
