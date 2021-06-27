import React, { createContext, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [userAuthenticated, setUserAuthenticated] = useState({});

  async function signIn(email, password) {
    try {
      if (email.trim() === "" || password.trim() === "") {
        return;
      }

      const res = await axios.post("http://localhost:5000/api/login", {
        email: email,
        senha: password,
      });

      const token = res.data.token;

      const tokenValue = jwtDecode(token);

      setUserAuthenticated(tokenValue);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, userAuthenticated, setUserAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
