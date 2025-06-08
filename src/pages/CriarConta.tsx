import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../components/Btn";
import Inputs from "../components/Inputs";
import RequiredLabel from "../components/RequiredLabel";

export default function CriarConta({ navigation }: any) {
  const [hidePassword, setHidePassword] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [celular, setCelular] = useState("");
  const [complemento, setComplemento] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleCadastro = async () => {
    if (!name || !email || !password || !cep || !celular) {
      Alert.alert(
        "Erro",
        "Todos os campos obrigatórios devem ser preenchidos."
      );
      return;
    }

    setLoading(true);

    const ddd = celular.substring(0, 2);
    const numero = celular.substring(2);

    const payload = {
      nome: name,
      email: email,
      senha: password,
      telefone: { ddd: ddd, numero: numero },
      endereco: { cep: cep },
    };

    try {
      const response = await axios.post(
        "http://{insira o ip de sua máquina}}:8080/users/inserir",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        Alert.alert("Sucesso", "Usuário criado com sucesso!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Erro", "Erro ao criar usuário. Tente novamente.");
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert("Erro", "Erro desconhecido ao criar usuário.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Crie sua conta</Text>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Cadastro</Text>
        <View style={styles.inputGroup}>
          <RequiredLabel text="Nome completo" />
          <Inputs
            placeholder="Informe seu nome completo"
            keyboardType="default"
            onChangeText={setName}
            value={name}
            textType="name"
          />
        </View>
        <View style={styles.inputGroup}>
          <RequiredLabel text="Email" />
          <Inputs
            placeholder="Informe seu email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            textType="emailAddress"
          />
        </View>
        <View style={styles.inputGroup}>
          <RequiredLabel text="Senha" />
          <View style={styles.inputWrapper}>
            <Inputs
              placeholder="Crie uma senha forte"
              keyboardType="default"
              value={password}
              onChangeText={setPassword}
              textType="password"
              security={hidePassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIconAbsolute}
            >
              <Icon
                name={hidePassword ? "eye-off" : "eye"}
                size={22}
                color="#607D8B"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Endereço</Text>
        <View style={styles.inputGroup}>
          <RequiredLabel text="CEP" />
          <Inputs
            placeholder="Informe seu CEP"
            keyboardType="numeric"
            onChangeText={setCep}
            value={cep}
            maxLength={9}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Complemento (opcional)</Text>
          <Inputs
            placeholder="Complemento"
            keyboardType="default"
            onChangeText={setComplemento}
            value={complemento}
          />
        </View>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Contato</Text>
        <View style={styles.inputGroup}>
          <RequiredLabel text="Celular" />
          <Inputs
            placeholder="Informe seu número de celular (ex: 11999999999)"
            keyboardType="phone-pad"
            onChangeText={setCelular}
            value={celular}
            maxLength={11}
          />
        </View>
      </View>

      {loading && (
        <ActivityIndicator color="#0AFAFA" style={{ marginVertical: 8 }} />
      )}

      <Btn txt="Criar Conta" pressFunc={handleCadastro} />

      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.loginLinkText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#49607D",
    alignItems: "center",
    paddingVertical: 30,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: "12%",
    marginBottom: 20,
  },
  groupContainer: {
    width: "92%",
    backgroundColor: "#3C4A5B",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0AFAFA",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  inputGroup: {
    marginBottom: 14,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
  },
  eyeIconAbsolute: {
    position: "absolute",
    right: 14,
    top: "32%",
    zIndex: 1,
  },
  loginLink: {
    marginTop: 20,
    alignSelf: "center",
  },
  loginLinkText: {
    color: "#0AFAFA",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    color: "white",
    fontSize: 15,
    marginBottom: 2,
    marginLeft: 2,
    fontWeight: "500",
  },
});
