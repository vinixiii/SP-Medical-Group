import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormattedDate } from "../hooks/useFormattedDate";
import { useAuth } from "../hooks/useAuth";

export function Appointments() {
  const { userAuthenticated } = useAuth();
  const [appointmentsList, setAppointmentsList] = useState([]);

  async function getAppointmentsList() {
    try {
      const token = await AsyncStorage.getItem("token");

      const res = await axios(
        "http://localhost:5000/api/consultas/minhas-consultas",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = res.data.map((item) => {
        const date = new Date(item.dataAgendamento);
        const formattedDate = useFormattedDate(date);
        return { ...item, dataAgendamento: formattedDate };
      });

      setAppointmentsList(data);

      // await fetch("http://localhost:5000/api/consultas", {
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.warn(data));

      // await fetch("https://dog.ceo/api/breeds/image/random")
      //   .then((res) => res.json())
      //   .then((data) => console.warn(data.message));
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getAppointmentsList();
  }, []);

  function refresh() {
    getAppointmentsList();
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.dataAgendamento}</Text>
      <View style={styles.cardContent}>
        <View>
          <View style={styles.cardRow}>
            {userAuthenticated.role === "2" ? (
              <>
                <FontAwesome5 name="user-md" size={24} color="#3E4954" />
                <Text style={styles.cardInfo}>
                  {item.idMedicoNavigation.nome}
                </Text>
              </>
            ) : (
              <>
                <FontAwesome5 name="user-plus" size={24} color="#3E4954" />
                <Text style={styles.cardInfo}>
                  {item.idPacienteNavigation.nome}
                </Text>
              </>
            )}
          </View>
          {userAuthenticated.role === "2" && (
            <View style={styles.cardRow}>
              <FontAwesome5 name="stethoscope" size={24} color="#3E4954" />
              <Text style={styles.cardInfo}>
                {item.idMedicoNavigation.idEspecialidadeNavigation.titulo}
              </Text>
            </View>
          )}
          <View style={styles.cardRow}>
            <FontAwesome5 name="clock" size={24} color="#3E4954" />
            <Text style={styles.cardInfo}>
              {new Date(item.dataAgendamento).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>

          <View
            style={
              (item.idSituacaoNavigation.titulo === "Realizada" &&
                styles.done) ||
              (item.idSituacaoNavigation.titulo === "Agendada" &&
                styles.scheduled) ||
              (item.idSituacaoNavigation.titulo === "Cancelada" &&
                styles.canceled)
            }
          >
            <Text
              style={
                (item.idSituacaoNavigation.titulo === "Realizada" &&
                  styles.doneText) ||
                (item.idSituacaoNavigation.titulo === "Agendada" &&
                  styles.scheduledText) ||
                (item.idSituacaoNavigation.titulo === "Cancelada" &&
                  styles.canceledText)
              }
            >
              {item.idSituacaoNavigation.titulo}
            </Text>
          </View>
        </View>
        <FontAwesome5 name="notes-medical" size={128} color={"#f1f1f1"} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.title}>Histórico de consultas</Text>
          <TouchableOpacity onPress={refresh}>
            <Feather name="refresh-ccw" size={18} color="#878787" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.projectsList}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg",
            }}
          />
          <FlatList
            data={appointmentsList}
            keyExtractor={(item) => item.idConsulta.toString()}
            renderItem={renderItem}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
  },

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
    paddingBottom: 24,
  },

  title: {
    fontSize: 28,
    color: "#215A58",
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

  cardContent: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
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
