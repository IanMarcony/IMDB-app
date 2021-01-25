import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import LogoIMDB from "../../assets/images/imdb.svg";

import {
  Container,
  AreaButtonsFormRegister,
  ButtonBackFormRegister,
  ButtonSubmitFormRegister,
  FormRegister,
  ImageLogo,
  InputFormRegister,
  RegisterPanel,
  TextRegister,
} from "./styles";
import api from "../../services/api";

function Register() {
  const [emailTxt, setEmailTxt] = useState("");
  const [nameTxt, setNameTxt] = useState("");
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

  async function handleRegister(e) {
    e.preventDefault();
    if (nameTxt === "" && passwordTxt === "" && emailTxt === "")
      return alert("Preencha todos os campos");
    try {
      const data_register = {
        name: nameTxt,
        email: emailTxt,
        password: passwordTxt,
      };

      const { token } = await (await api.post("user/register", data_register))
        .data;

      await localStorage.setItem("token:imdb", token);

      history.push("/home");
    } catch (error) {
      alert("Falha ao criar conta. Tente novamente.");
    }
  }

  return (
    <Container>
      <RegisterPanel>
        <ImageLogo src={LogoIMDB} height={70} />
        <TextRegister>Crie sua conta</TextRegister>
        <FormRegister onSubmit={handleRegister}>
          <InputFormRegister
            type="text"
            placeholder="Insira seu nome"
            onChange={(e) => setNameTxt(e.target.value)}
          />
          <InputFormRegister
            type="email"
            placeholder="Insira seu email"
            onChange={(e) => setEmailTxt(e.target.value)}
          />
          <InputFormRegister
            type="password"
            placeholder="Insira sua senha"
            onChange={(e) => setPasswordTxt(e.target.value)}
          />
          <AreaButtonsFormRegister>
            <ButtonSubmitFormRegister type="submit">
              Criar
            </ButtonSubmitFormRegister>
            <ButtonBackFormRegister to="/">Voltar</ButtonBackFormRegister>
          </AreaButtonsFormRegister>
        </FormRegister>
      </RegisterPanel>
    </Container>
  );
}

export default Register;
