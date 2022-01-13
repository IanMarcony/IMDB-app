import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.li`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    margin-left: 0.5rem;
  }

  &:last-child() {
    margin-right: 0.5rem;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const ImageMovie = styled.img`
  width: auto;
  height: auto;
  object-fit: fill;
`;

export const TitleMovie = styled.span`
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  padding-bottom: 0;
  text-align: center;
  font-weight: 500;
  font-size: 100%;

  background-color: ${colors.accent_color};
  color: ${colors.primary_text_color};

  -webkit-box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.75);

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
