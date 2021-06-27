import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

export function Header() {
  const role = "2";

  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <Text style={styles.title}>Paciente</Text>
        {role === "2" ? (
          <FontAwesome5
            style={styles.headerImg}
            name="user-plus"
            size={24}
            color="#3E4954"
          />
        ) : (
          <FontAwesome5
            style={styles.headerImg}
            name="user-md"
            size={24}
            color="#3E4954"
          />
        )}
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
