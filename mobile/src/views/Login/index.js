import React, { useState, useEffect } from "react";

import { AreaLogin, Container, LoginTextHeader, LogoImage } from "./styles";

import LogoIMD from "../../assets/images/imdb.png";

import api from "../../services/api";

const Login = ({ navigation }) => {
  const [emailTxt, setEmailTxt] = useState("");
  const [passwordTxt, setPasswordTxt] = useState("");

  useEffect(() => {
    api.get("/users").then((res) => {});
  }, []);

  return (
    <Container>
      <LogoImage resizeMode="contain" source={LogoIMD} />
      <AreaLogin>
        <LoginTextHeader>Entre na sua conta</LoginTextHeader>
      </AreaLogin>
    </Container>
  );
};

export default Login;
