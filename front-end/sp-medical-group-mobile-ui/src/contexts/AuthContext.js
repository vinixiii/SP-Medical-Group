import React, { createContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [userAuthenticated, setUserAuthenticated] = useState({});

  async function signIn(email, password) {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: email,
        senha: password,
      });

      await AsyncStorage.setItem("token", res.data.token);
      const tokenDecrypted = jwtDecode(res.data.token);

      setUserAuthenticated(tokenDecrypted);
    } catch (error) {
      console.warn(error);
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem("token");
    setUserAuthenticated({});
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, userAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}
