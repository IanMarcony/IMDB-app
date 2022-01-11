import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import LogoIMDB from "../../assets/images/imdb.svg";

import {
  Container,
  AreaButtonsFormLogin,
  ButtonRegisterFormLogin,
  ButtonSubmitFormLogin,
  FormLogin,
  ImageLogo,
  InputFormLogin,
  LoginPanel,
  TextLogin,
} from "./styles";

import api from "../../services/api";

function Login() {
  const [emailTxt, setEmailTxt] = useState("");
  const [passwordTxt, setPasswordTxt] = useState("");
  const history = useHistory();
  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        return;
      })
      .catch((err) => {
        return alert("Erro ao se conectar no backend");
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token:imdb")) {
      history.push("/home");
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    if (passwordTxt === "" && emailTxt === "")
      return alert("Preencha todos os campos");

    api
      .post("/users/auth", {
        email: emailTxt,
        password: passwordTxt,
      })
      .then((res) => {
        const { token } = res.data;

        localStorage.setItem("token:imdb", token);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        return alert("Falha ao fazer o login. Tente novamente. " + err);
      });
  }

  return (
    <Container>
      <LoginPanel>
        <ImageLogo src={LogoIMDB} height={70} />
        <TextLogin>Faça seu Logon</TextLogin>
        <FormLogin onSubmit={handleLogin}>
          <InputFormLogin
            type="email"
            placeholder="Insira seu email"
            onChange={(e) => setEmailTxt(e.target.value)}
          />
          <InputFormLogin
            type="password"
            placeholder="Insira sua senha"
            onChange={(e) => setPasswordTxt(e.target.value)}
          />
          <AreaButtonsFormLogin>
            <ButtonSubmitFormLogin type="submit">Entrar</ButtonSubmitFormLogin>
            <ButtonRegisterFormLogin to="/register">
              Crie uma conta aqui!
            </ButtonRegisterFormLogin>
          </AreaButtonsFormLogin>
        </FormLogin>
      </LoginPanel>
    </Container>
  );
}

export default Login;
