import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import HeaderPages from "../components/HeaderPages";
import WaterLevel from "../components/WaterLevel";
import Sensor from "../components/Sensor";

const sensores = [
  {
    id_modulo: "2323",
    rua: "Alencar",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2324",
    rua: "Paulista",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2325",
    rua: "Liberdade",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2326",
    rua: "Sé",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2327",
    rua: "Vergueiro",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2328",
    rua: "Ipiranga",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2328",
    rua: "Ipiranga",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
  {
    id_modulo: "2328",
    rua: "Ipiranga",
    data_instalacao: "11/04/2025",
    leituras: "5 itens",
  },
];

export default function Bairro({ navigation }: any) {
  return (
    <View style={styles.container}>
      <HeaderPages title="Praça da Sé" navigation={navigation} />
      <View style={styles.waterContainer}>
        <WaterLevel level={1.6} />
      </View>
      <FlatList
        style={styles.list}
        data={sensores}
        renderItem={({ item }) => (
          <Sensor
            id_modulo={item.id_modulo}
            rua={item.rua}
            navigation={navigation}
            data_instalacao={item.data_instalacao}
            leituras={item.leituras}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListRow}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49607D",
    paddingBottom: 40,
  },
  flatListContent: {
    paddingHorizontal: 8,
    paddingTop: 24,
    gap: 16,
  },
  flatListRow: {
    gap: 16,
    justifyContent: "space-between",
  },
  list: {
    maxHeight: "44.3%",
  },
  waterContainer: {
    marginBottom: 40,
  },
});
