import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import HeaderPages from "../components/HeaderPages";
import WaterLevel from "../components/WaterLevel";
import Sensor from "../components/Sensor";

const sensores = [
  {
    id_modulo: "ESP32 - HTRF",
    rua: "Rua 1",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "seguro", nivel_cm: 12, data: "08/06/2025 10:00" },
      { status: "alerta", nivel_cm: 35, data: "07/06/2025 16:30" },
      { status: "risco de alagamento", nivel_cm: 45, data: "07/06/2025 08:15" },
    ],
  },
  {
    id_modulo: "ESP32 - HBRA",
    rua: "Rua 1",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "seguro", nivel_cm: 9, data: "08/06/2025 09:50" },
      { status: "seguro", nivel_cm: 10, data: "07/06/2025 18:00" },
      { status: "alerta", nivel_cm: 29, data: "06/06/2025 20:15" },
    ],
  },
  {
    id_modulo: "ESP 32 - HFTR",
    rua: "Rua 2",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "alerta", nivel_cm: 32, data: "08/06/2025 08:30" },
      { status: "risco de alagamento", nivel_cm: 41, data: "07/06/2025 17:45" },
      { status: "seguro", nivel_cm: 15, data: "06/06/2025 11:00" },
    ],
  },
  {
    id_modulo: "ESP 32 - HTRC",
    rua: "Rua 2",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "seguro", nivel_cm: 13, data: "08/06/2025 07:20" },
      { status: "seguro", nivel_cm: 12, data: "07/06/2025 13:10" },
      { status: "alerta", nivel_cm: 28, data: "06/06/2025 19:00" },
    ],
  },
  {
    id_modulo: "ESP 32 - HTFB",
    rua: "Rua 3",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "risco de alagamento", nivel_cm: 47, data: "08/06/2025 06:40" },
      { status: "alerta", nivel_cm: 36, data: "07/06/2025 15:00" },
      { status: "alerta", nivel_cm: 33, data: "06/06/2025 13:30" },
    ],
  },
  {
    id_modulo: "ESP 32 - HFFF",
    rua: "Rua 3",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "seguro", nivel_cm: 8, data: "08/06/2025 12:10" },
      { status: "seguro", nivel_cm: 7, data: "07/06/2025 11:15" },
      { status: "seguro", nivel_cm: 10, data: "06/06/2025 10:00" },
    ],
  },
  {
    id_modulo: "ESP 32 - HPOP",
    rua: "Rua 4",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "alerta", nivel_cm: 30, data: "08/06/2025 13:00" },
      { status: "alerta", nivel_cm: 27, data: "07/06/2025 09:30" },
      { status: "seguro", nivel_cm: 18, data: "06/06/2025 08:45" },
    ],
  },
  {
    id_modulo: "ESP 32 - HHVV",
    rua: "Rua 4",
    data_instalacao: "11/04/2025",
    leituras: [
      { status: "seguro", nivel_cm: 11, data: "08/06/2025 11:20" },
      { status: "alerta", nivel_cm: 31, data: "07/06/2025 14:00" },
      { status: "risco de alagamento", nivel_cm: 44, data: "06/06/2025 16:30" },
    ],
  },
];

export default function Bairro({ navigation, route }: any) {
  const waterLevel = Math.random() * 2;
  const bairro = route?.params?.bairro || "Bairro não informado";

  return (
    <View style={styles.container}>
      <HeaderPages title={bairro} navigation={navigation} />
      <View style={styles.waterContainer}>
        <WaterLevel level={waterLevel} />
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
