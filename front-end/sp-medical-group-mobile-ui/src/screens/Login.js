import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../assets/Logo";
import { useAuth } from "../hooks/useAuth";

export function Login({ navigation }) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    await signIn(email, password);
    navigation.navigate("Navigation");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Logo style={styles.logoImg} />
        <Text style={styles.logoText}>SP Medical Group</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>E-mail</Text>
            <TextInput
              style={styles.formInput}
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.formLabel}>Senha</Text>
            <TextInput
              style={styles.formInput}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 240,
    backgroundColor: "#E8EFEF",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoText: {
    fontSize: 38,
    color: "#215A58",
    paddingTop: 18,
    paddingBottom: 24,
  },

  main: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    color: "#215A58",
    paddingTop: 38,
    paddingBottom: 24,
  },

  form: {
    flex: 1,
  },

  formField: {
    marginBottom: 20,
  },

  formLabel: {
    fontSize: 18,
    color: "#215A58",
    marginBottom: 8,
  },

  formInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#878787",
    borderRadius: 6,
    height: 52,
    paddingLeft: 20,
  },

  button: {
    marginTop: 43,
    backgroundColor: "#007FA3",
    width: 105,
    height: 52,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
