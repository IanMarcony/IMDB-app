import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors.js";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${colors.primary_text_color};
  @media screen and (max-width: 400px) {
    width: 100vw;
  }
`;

export const RegisterPanel = styled.div`
  width: 50%;
  height: max-content;
  padding: 2rem;
  margin: 0 auto;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.6rem;
  background-color: ${colors.primary_color};
  border-color: ${colors.secondary_text_color};

  -webkit-box-shadow: -6px 6px 12px 2px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -6px 6px 12px 2px rgba(0, 0, 0, 0.61);
  box-shadow: -6px 6px 12px 2px rgba(0, 0, 0, 0.61);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    width: 89vw;
  }
`;

export const ImageLogo = styled.img`
  margin-right: auto;
`;

export const TextRegister = styled.h1`
  color: ${colors.primary_text_color};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const FormRegister = styled.form`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const InputFormRegister = styled.input`
  width: 100%;
  height: 1.4rem;
  margin-bottom: 2rem;
  padding: 0.8rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.secondary_text_color};

  border-radius: 0.2rem;
  color: ${colors.primary_text_color};
`;
export const AreaButtonsFormRegister = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonSubmitFormRegister = styled.button`
  width: 35%;
  border-radius: 0.2rem;

  align-items: center;
  justify-content: center;
  height: max-content;
  background-color: ${colors.accent_color};
  padding: 0.2rem;
  color: ${colors.primary_color};
  font-weight: 400;
  border-style: none;
  font-size: 1.2rem;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonBackFormRegister = styled(Link)`
  width: 35%;
  border-radius: 0.2rem;
  display: flex;

  height: 0.5rem;
  background-color: ${colors.accent_color};
  color: ${colors.primary_color};

  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: left;
  text-decoration: none;
  font-weight: 400;
  padding: 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
