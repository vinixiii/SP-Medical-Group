import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";

export function Header() {
  const { userAuthenticated } = useAuth();

  return (
    <View style={styles.header}>
      <View style={styles.content}>
        {(userAuthenticated.role === "2" && (
          <>
            <Text style={styles.title}>{userAuthenticated.nomePaciente}</Text>
            <FontAwesome5
              style={styles.headerImg}
              name="user-plus"
              size={24}
              color="#3E4954"
            />
          </>
        )) ||
          (userAuthenticated.role === "3" && (
            <>
              <Text style={styles.title}>{userAuthenticated.nomeMedico}</Text>
              <FontAwesome5
                style={styles.headerImg}
                name="user-md"
                size={24}
                color="#3E4954"
              />
            </>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingBottom: 16,
    backgroundColor: "#E8EFEF",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },

  title: {
    fontSize: 16,
    color: "#3F3D56",
    paddingRight: 16,
  },

  headerImg: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
  },
});
