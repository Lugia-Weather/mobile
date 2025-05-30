import { TextInput, StyleSheet, KeyboardTypeOptions, View } from "react-native";

interface inputsProps {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  value?: string;
  textType?: React.ComponentProps<typeof TextInput>["textContentType"];
  onChangeText?: (text: string) => void;
  security?: boolean | undefined;
}

export default function Inputs({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  textType,
  security,
}: inputsProps) {
  return (
    <View style={styles.inputField}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={security}
        textContentType={textType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
  inputField: {
    backgroundColor: "#E1F5FE",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 6,
    height: 45,
    justifyContent: "center",
  },
});
