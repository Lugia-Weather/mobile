import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Image } from "expo-image";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../components/Btn";

export default function Login({ navigation }: any) {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleLogin = () => {
    if (email == "funcionario@mottu.com" && password == "organiza") {
      setError("");
      navigation.navigate("Tabs");
    } else {
      setError("Email ou senha inválidos.");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#0AFAFA"
            textContentType="emailAddress"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
          />
          <View style={styles.underline} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={hidePassword}
              textContentType="password"
              placeholderTextColor="#0AFAFA"
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <Icon
                name={hidePassword ? "eye-off" : "eye"}
                size={24}
                color="#E1F5FE"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.underline} />
        </View>

        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        <Btn txt="Entrar" pressFunc={handleLogin} />
        <View style={styles.containerCreateAccount}>
          <Text style={{ color: "#E1F5FE", fontSize: 16 }}>
            Se você não tiver uma conta, clique em
          </Text>
          <Text
            style={{ color: "#0AFAFA", fontSize: 20 }}
            onPress={() => navigation.navigate("CriarConta")}
          >
            Criar Conta
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49607D",
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    color: "#E1F5FE",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
  },
  eyeIcon: {
    padding: 4,
  },
  underline: {
    height: 1,
    backgroundColor: "#E1F5FE",
    marginTop: 5,
    color: "white",
  },
  errorText: {
    color: "#FFD54F",
    textAlign: "center",
    marginTop: 14,
    fontSize: 18,
    fontWeight: "500",
    position: "absolute",
    alignSelf: "center",
  },
  containerCreateAccount: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bottom: 250,
    gap: 2,
  },
});
