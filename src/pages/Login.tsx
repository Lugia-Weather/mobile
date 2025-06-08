import axios from "axios";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../components/Btn";

export default function Login({ navigation }: any) {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleLogin = async () => {
    setError("");
    Keyboard.dismiss();

    if (!email || !password) {
      setError("Informe email e senha.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://172.191.241.118:8080/auth/login",
        {
          email: email,
          senha: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const usersResponse = await axios.get(
          "http://172.191.241.118:8080/users"
        );
        if (usersResponse.status === 200 && Array.isArray(usersResponse.data)) {
          const user = usersResponse.data.find((u) => u.email === email);
          if (user.endereco.bairro) {
            navigation.navigate("Tabs", {
              bairro: user.endereco.bairro,
            });
          } else {
            setError("Não foi possível localizar o endereço do usuário.");
          }
        } else {
          setError("Erro ao buscar dados do usuário.");
        }
      } else {
        setError("Erro ao autenticar. Tente novamente.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Email ou senha inválidos.");
      } else {
        setError("Erro de conexão. Tente novamente.");
      }
    } finally {
      setLoading(false);
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
            autoCapitalize="none"
            autoCorrect={false}
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
              autoCapitalize="none"
              autoCorrect={false}
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
        {loading && (
          <ActivityIndicator color="#0AFAFA" style={{ marginTop: 16 }} />
        )}

        <Btn txt="Entrar" pressFunc={handleLogin} />
        <View style={styles.containerCreateAccount}>
          <Text
            style={{
              color: "#E1F5FE",
              fontSize: 16,
              position: "absolute",
              marginTop: 45,
            }}
          >
            Se você não tiver uma conta, clique em
          </Text>
          <Text
            style={{
              color: "#0AFAFA",
              fontSize: 20,
              position: "absolute",
              marginTop: 100,
            }}
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
