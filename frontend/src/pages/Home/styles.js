import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors.js";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const HeaderHome = styled.header`
  width: 100%;
  height: 3.4rem;
  padding: 1rem;
  background-color: ${colors.primary_text_color};
  display: flex;
`;
export const NavHeader = styled.nav`
  width: 100%;
  height: max-content;
`;

export const ButtonLogout = styled.a`
  width: 1.4rem;
  height: 1rem;
  margin-left: auto;

  padding: 0.4rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
