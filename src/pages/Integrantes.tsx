import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Integrante from "../components/Integrante";

export default function Integrantes() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Participantes</Text>

      <Integrante
        name="Nathan Magno"
        rm="RM 558987"
        urlImage={require("../../assets/Nathan.jpg")}
        github="https://github.com/NathanMagno"
      />

      <Integrante
        name="Júlio Cesar"
        rm="RM 557774"
        urlImage={require("../../assets/Jubs.jpg")}
        github="https://github.com/JubsHereMan"
      />

      <Integrante
        name="Erick Paschoalatto"
        rm="RM 554854"
        urlImage={require("../../assets/Erick.jpg")}
        github="https://github.com/ozerikoz"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#49607D",
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0AFAFA",
    marginVertical: "12%",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  logohomepage: {
    width: 60,
    height: 60,
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 22,
    color: "white",
  },
});
