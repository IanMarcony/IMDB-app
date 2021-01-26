import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.li`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin: 2rem;
`;

export const ImagePerson = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const NamePerson = styled.span`
  width: 100%;
  margin-top: 0.2rem;
  text-align: center;
  font-weight: 400;
  font-size: 12pt;
  color: ${colors.primary_text_color};
`;
