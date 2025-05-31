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
import { Entypo } from "@expo/vector-icons";
export default function Integrantes({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Participantes</Text>

      <Entypo
        name="chevron-left"
        size={34}
        color="white"
        style={styles.icon}
        onPress={navigation.reset({ index: 0, routes: [{ name: "Login" }] })}
      />

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
    color: "white",
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
  icon: {
    position: "absolute",
    top: "4%",
    left: "5%",
  },
});
