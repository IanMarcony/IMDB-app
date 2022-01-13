import React, { useState, useEffect, useCallback } from "react";
import LogoIMDB from "../../assets/images/imdb.svg";

import { useHistory } from "react-router-dom";

import UserItem from "../../components/UserItem";
import MovieItem from "../../components/MovieItem";

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
  FooterText,
  ListMoviesArea,
  SectionListMovies,
} from "./styles";
import api from "../../services/api";
import apiTMDB from "../../services/apiTMDB";

const api_key = "f49ec80be704d39e2f4a1aa24d71c81b";

function Home() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [titleListMovies, setTitleListMovies] = useState("...");
  const [overviewtMovies, setOverviewListMovies] = useState("...");

  const verifyConnectionAPI = useCallback(async () => {
    try {
      await api.get("/");
    } catch (error) {
      return alert("Erro ao se conectar no backend");
    }
  }, []);

  const verifyAuthentication = useCallback(() => {
    if (!localStorage.getItem("token:imdb")) {
      history.push("/");
    }
  }, [history]);

  const listAllUsers = useCallback(async () => {
    const AuthStr = "Bearer " + localStorage.getItem("token:imdb");

    try {
      const { data } = await api.get("/users", {
        headers: { Authorization: AuthStr },
      });

      setUsers(data);
    } catch (err) {
      return alert("Houve algum erro ao buscar os usuários. " + err);
    }
  }, []);

  const listAllMovies = useCallback(async () => {
    try {
      const { data } = await apiTMDB.get(`/list/1?api_key=${api_key}`);

      setListMovies(data.items);
      setTitleListMovies(data.name);
      setOverviewListMovies(data.description);
    } catch (err) {
      return alert("Houve algum erro ao buscar os usuários. " + err);
    }
  }, []);

  useEffect(() => {
    verifyConnectionAPI();
    verifyAuthentication();
    listAllUsers();
    listAllMovies();
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

        <SectionListMovies>
          <HeaderText>
            {titleListMovies} <hr />
          </HeaderText>
          <ListMoviesArea>
            {listMovies.length > 0
              ? listMovies.map((item) => (
                  <MovieItem
                    key={item.id}
                    title={item.title}
                    image={item.poster_path}
                  />
                ))
              : null}
          </ListMoviesArea>
          <FooterText>{overviewtMovies}</FooterText>
        </SectionListMovies>
      </Content>
    </Container>
  );
}

export default Home;
