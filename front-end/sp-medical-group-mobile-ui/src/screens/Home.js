import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";

const consultas = [
  {
    id: "1",
    date: "Quarta-feira, 20 de Janeiro",
    doctor: "Ricardo Lemos",
    specialty: "Anestesiologia",
    time: "15:00",
    status: "Realizada",
  },
  {
    id: "2",
    date: "Quarta-feira, 20 de Janeiro",
    doctor: "Roberto Possarle",
    specialty: "Psiquiatria",
    time: "15:00",
    status: "Agendada",
  },
  {
    id: "2",
    date: "Quarta-feira, 20 de Janeiro",
    doctor: "Possarle",
    specialty: "Psiquiatria",
    time: "15:00",
    status: "Cancelada",
  },
  {
    id: "2",
    date: "Quarta-feira, 20 de Janeiro",
    doctor: "Robertão",
    specialty: "Psiquiatria",
    time: "15:00",
    status: "Agendada",
  },
];

const scheduled = consultas.filter(
  (consulta) => consulta.status === "Agendada"
);

export function Home() {
  const { userAuthenticated } = useAuth();

  function refresh() {
    console.warn("Olá");
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.date}</Text>
      <View style={styles.cardRow}>
        <FontAwesome5 name="user-md" size={24} color="#3E4954" />
        <Text style={styles.cardInfo}>{item.doctor}</Text>
      </View>
      <View style={styles.cardRow}>
        <FontAwesome5 name="stethoscope" size={24} color="#3E4954" />
        <Text style={styles.cardInfo}>{item.specialty}</Text>
      </View>
      <View style={styles.cardRow}>
        <FontAwesome5 name="clock" size={24} color="#3E4954" />
        <Text style={styles.cardInfo}>{item.time}</Text>
      </View>

      <View
        style={
          (item.status === "Realizada" && styles.done) ||
          (item.status === "Agendada" && styles.scheduled) ||
          (item.status === "Cancelada" && styles.canceled)
        }
      >
        {/* {item.status} */}
        <Text
          style={
            (item.status === "Realizada" && styles.doneText) ||
            (item.status === "Agendada" && styles.scheduledText) ||
            (item.status === "Cancelada" && styles.canceledText)
          }
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.title}>
            Olá, Doutor(a) Vinícius! {userAuthenticated.email}
          </Text>
          <TouchableOpacity onPress={refresh}>
            <Feather name="refresh-ccw" size={24} color="#878787" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Consultas agendadas</Text>

        <ScrollView style={styles.projectsList}>
          <FlatList
            data={scheduled}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </ScrollView>
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

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 38,
    paddingBottom: 32,
  },

  title: {
    fontSize: 30,
    color: "#215A58",
  },

  subtitle: {
    fontSize: 24,
    color: "#007FA3",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    minHeight: 159,
    padding: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 22,
    color: "#3F3D56",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 12,
  },

  cardInfo: {
    fontSize: 18,
    color: "#3E4954",
    paddingTop: 8,
    paddingLeft: 20,
  },

  done: {
    alignSelf: "flex-start",
    backgroundColor: "#7BC0BE",
    fontSize: 18,
    marginTop: 24,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 6,
  },

  scheduled: {
    alignSelf: "flex-start",
    backgroundColor: "#F5EEA7",
    fontSize: 18,
    marginTop: 24,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 6,
  },

  canceled: {
    alignSelf: "flex-start",
    backgroundColor: "#FFB0B1",
    fontSize: 18,
    marginTop: 24,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 6,
  },

  doneText: {
    fontSize: 18,
    color: "#0C5452",
  },

  scheduledText: {
    fontSize: 18,
    color: "#8F8414",
  },

  canceledText: {
    fontSize: 18,
    color: "#BE2527",
  },
});
