//Packages
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";

//Pages
import { Home } from "./Home";
import { Appointments } from "./Appointments";
import { More } from "./More";

//Components
import { Header } from "../components/Header";

const Tab = createMaterialBottomTabNavigator();

export function Navigation() {
  return (
    <>
      <Header />
      <Tab.Navigator
        shifting
        activeColor="#215A58"
        inactiveColor="#878787"
        barStyle={{ backgroundColor: "#fff", height: 60 }}
        showIcon={true}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={Appointments}
          options={{
            tabBarLabel: "Consultas",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="notes-medical" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: "Mais",
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="options" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
