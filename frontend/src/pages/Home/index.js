import React, { useState, useEffect } from "react";
import LogoIMDB from "../../assets/images/imdb.svg";

import { useHistory } from "react-router-dom";

import {
  Container,
  HeaderHome,
  NavHeader,
  ButtonLogout,
  ImageLogo,
} from "./styles";
import api from "../../services/api";

function Home() {
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
    if (!localStorage.getItem("token:imdb")) {
      history.push("/");
    }
  }, []);

  async function handleLogout() {
    try {
      await localStorage.removeItem("token:imdb");

      history.push("/");
    } catch (err) {
      alert("Erro ao sair da conta");
    }
  }

  return (
    <Container>
      <HeaderHome>
        <NavHeader>
          <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        </NavHeader>
      </HeaderHome>
    </Container>
  );
}

export default Home;
