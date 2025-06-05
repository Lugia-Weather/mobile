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
  const [numero, setNumero] = useState("");
  const [celular, setCelular] = useState("");

  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [complemento, setComplemento] = useState("");

  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleCadastro = async () => {
    if (!name || !email || !password || !cep) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      setLoading(false);
      return;
    }
  };

  //     try {
  //       const response = await axios.post(`http://${ip}:5000/pessoas/cadastro`, {
  //         nome,
  //         email,
  //         senha,
  //         cep,
  //       });

  //       if (response.status === 200 || response.status === 201) {
  //         Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  //         navigation.navigate("Tabs", { email: email });
  //       }
  //     } catch (error) {
  //       console.log("ERRO:", error.response?.data);

  //       if (error.response) {
  //         const { status, data } = error.response;
  //         const message = data?.message || data?.error || "";

  //         if (status === 400 && message.toLowerCase().includes("e-mail")) {
  //           Alert.alert(
  //             "Erro",
  //             "Já existe uma conta cadastrada com esse e-mail."
  //           );
  //         } else if (
  //           status === 400 &&
  //           message.toLowerCase().includes("campos obrigatórios")
  //         ) {
  //           Alert.alert("Erro", "Todos os campos são obrigatórios.");
  //         } else {
  //           Alert.alert(
  //             "Erro",
  //             message ||
  //               "Erro ao cadastrar. Verifique os dados e tente novamente."
  //           );
  //         }
  //       } else {
  //         Alert.alert("Erro", "Não foi possível conectar ao servidor.");
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

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
            maxLength={8}
          />
        </View>
        <View style={styles.inputGroup}>
          <RequiredLabel text="Número do endereço" />
          <Inputs
            placeholder="Número"
            keyboardType="numeric"
            onChangeText={setNumero}
            value={numero}
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
        {logradouro ? (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Endereço</Text>
            <Text style={styles.addressText}>
              {logradouro}, {bairro}, {cidade} - {uf}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Contato</Text>
        <View style={styles.inputGroup}>
          <RequiredLabel text="Celular" />
          <Inputs
            placeholder="Informe seu número de celular"
            keyboardType="phone-pad"
            onChangeText={setCelular}
            value={celular}
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
  addressText: {
    color: "#B2EBF2",
    fontSize: 14,
    marginLeft: 2,
    marginTop: 2,
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
