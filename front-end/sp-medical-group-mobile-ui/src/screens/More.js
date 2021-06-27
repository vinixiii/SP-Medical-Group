import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";

export function More({ navigation }) {
  const { setUserAuthenticated } = useAuth();

  async function signOut() {
    await setUserAuthenticated({});
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Mais</Text>

        <TouchableOpacity style={styles.screen} onPress={signOut}>
          <View style={styles.screenContent}>
            <MaterialIcons name="logout" size={24} color="#878787" />
            <Text style={styles.screenText}>Sair</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#878787" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F5",
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

  screen: {
    backgroundColor: "#fff",
    borderRadius: 6,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  screenContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  screenText: {
    fontSize: 18,
    color: "#878787",
    marginLeft: 20,
  },
});
