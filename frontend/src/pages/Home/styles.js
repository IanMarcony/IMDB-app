import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors.js";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

export const HeaderHome = styled.header`
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  background-color: ${colors.primary_text_color};
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
export const NavHeader = styled.nav`
  width: 25%;
  align-items: center;
`;

export const ButtonLogout = styled.a`
  width: 1.4rem;
  height: 1rem;
  margin-right: auto;

  padding: 0.4rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageLogo = styled.img`
  margin-left: auto;
  margin-right: 50%;
  justify-self: center;
  align-self: center;
  @media screen and (max-width: 800px) {
    margin-left: 25vw;
  }
`;

export const Content = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SectionUsers = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;

  border-top-width: 2px;
  border-top-color: ${colors.primary_color};
  border-top-style: solid;
  -webkit-box-shadow: 0px -5px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -5px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -5px 6px 0px rgba(0, 0, 0, 0.75);

  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;

  margin-top: 1.9rem;
  padding: 2rem;
  @media screen and (max-width: 800px) {
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`;

export const HeaderText = styled.h1`
  font-weight: 700;
  text-align: left;
  color: ${colors.primary_text_color};
  margin-bottom: 2rem;
  @media screen and (max-width: 800px) {
    font-size: 13pt;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ListUsersArea = styled.ul`
  width: 90%;
  height: max-content;
  margin: 0 auto;
  overflow-x: auto;
  &:empty {
    overflow: hidden;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
