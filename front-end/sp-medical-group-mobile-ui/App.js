//Packages
import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import { Login } from "./src/screens/Login";
import { Navigation } from "./src/screens/Navigation";
import { AuthContextProvider } from "./src/contexts/AuthContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Navigation" component={Navigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
