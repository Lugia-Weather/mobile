import { TextInput, StyleSheet } from "react-native";

interface inputsProps {
  placeholder: string;
  keyboardType: string;
  value: () => void;
  onChangeText: () => void;
  security: boolean;
}

export default function Inputs({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  security,
}: inputsProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="ascii-capable"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});
