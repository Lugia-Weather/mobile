import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

interface SensorItemProps {
  id_modulo: string;
  rua: string;
  navigation?: any;
  data_instalacao?: string;
  leituras?: any;
}

export default function Sensor({
  id_modulo,
  rua,
  navigation,
  data_instalacao,
  leituras,
}: SensorItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Dispositivo", {
          id_modulo,
          rua,
          data_instalacao,
          leituras,
        })
      }
    >
      <Image
        source={require("../../assets/sensor.png")}
        style={styles.sensorImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.idModulo}>{id_modulo}</Text>
        <Text style={styles.rua}>{rua}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    borderRadius: 12,
    padding: 12,
    marginVertical: 4,
    alignItems: "center",
    elevation: 2,
    flexDirection: "column",
  },
  sensorImage: {
    width: 50,
    height: 30,
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  idModulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  rua: {
    fontSize: 14,
    color: "#7ed957",
    marginTop: 2,
  },
});
