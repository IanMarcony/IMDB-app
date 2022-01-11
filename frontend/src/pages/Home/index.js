import React, { useState, useEffect } from "react";
import LogoIMDB from "../../assets/images/imdb.svg";

import { useHistory } from "react-router-dom";

import UserItem from "../../components/UserItem";

import {
  Container,
  HeaderHome,
  NavHeader,
  ButtonLogout,
  ImageLogo,
  Content,
  HeaderText,
  SectionUsers,
  ListUsersArea,
} from "./styles";
import api from "../../services/api";

function Home() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    const AuthStr = "Bearer " + localStorage.getItem("token:imdb");
    api
      .get("/users", { headers: { Authorization: AuthStr } })
      .then((res) => setUsers(res.data))
      .catch((err) => alert("Houve algum erro ao buscar os usuários. " + err));
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
        <ImageLogo src={LogoIMDB} height={70} />
      </HeaderHome>

      <Content>
        <SectionUsers>
          <HeaderText>
            Usuários que já participam do IMDB <hr />
          </HeaderText>
          <ListUsersArea>
            {users.length > 0
              ? users.map((item) => <UserItem key={item.id} name={item.name} />)
              : null}
          </ListUsersArea>
        </SectionUsers>
      </Content>
    </Container>
  );
}

export default Home;
