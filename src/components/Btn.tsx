import { ButtonHTMLAttributes } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface btnProps {
  txt: string;
  pressFunc?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function Btn({ txt, pressFunc }: btnProps) {
  return (
    <TouchableOpacity onPress={pressFunc} style={styles.button}>
      <Text style={styles.buttonText}>{txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0AFAFA",
    height: 50,
    marginHorizontal: 30,
    paddingInline: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#111",
    fontSize: 22,
    fontWeight: "bold",
  },
});
