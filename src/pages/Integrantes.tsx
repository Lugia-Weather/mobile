import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Integrante from "../components/Integrante";
import HeaderPages from "../components/HeaderPages";

export default function Integrantes({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <HeaderPages title="Integrantes" navigation={navigation} />
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
});
