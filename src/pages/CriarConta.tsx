import axios from "axios";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../components/Btn";
import Inputs from "../components/Inputs";

export default function CriarConta({ navigation }: any) {
  const [hidePassword, setHidePassword] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");

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
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Crie sua conta</Text>
      </View>

      <View style={styles.inputContainer}>
        <Inputs
          placeholder="Informe seu nome completo"
          keyboardType="default"
          onChangeText={(text: string) => setName(text)}
          value={name}
          textType="name"
        />

        <Inputs
          placeholder="Informe seu email"
          keyboardType="email-address"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          textType="emailAddress"
        />
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

        <Inputs
          placeholder="Informe seu CEP"
          keyboardType="numeric"
          onChangeText={(text: string) => setCep(text)}
          value={cep}
        />
      </View>

      <Btn txt="Criar Conta" pressFunc={handleCadastro} />

      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.loginLinkText}>Já tenho uma conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: "#49607D",
    flex: 1,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0AFAFA",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
  },
  eyeIconAbsolute: {
    position: "absolute",
    right: 20,
    top: "32%",
    zIndex: 1,
  },

  inputContainer: {
    width: "80%",
    marginVertical: 15,
    gap: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  input: {
    fontSize: 16,
  },
  createButton: {
    backgroundColor: "#FF0066",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 8,
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginLink: {
    marginTop: 8,
  },
  loginLinkText: {
    color: "#0AFAFA",
    fontSize: 18,
    marginTop: 30,
  },
});
