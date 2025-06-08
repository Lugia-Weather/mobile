import { StyleSheet, Text } from "react-native";
import React from "react";

export default function RequiredLabel({ text }: { text: string }) {
  return (
    <Text style={styles.label}>
      {text}
      <Text style={styles.required}> *</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 15,
    marginBottom: 2,
    marginLeft: 2,
    fontWeight: "500",
  },
  required: {
    color: "#FF5252",
    fontWeight: "bold",
    fontSize: 15,
  },
});
