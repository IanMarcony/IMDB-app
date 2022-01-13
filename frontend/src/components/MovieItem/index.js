import React from "react";

import { Container, ImageMovie, TitleMovie } from "./styles";

function MovieItem({ image, title }) {
  return (
    <>
      <Container>
        <ImageMovie src={"https://image.tmdb.org/t/p/original" + image} />
        <TitleMovie>{title}</TitleMovie>
      </Container>
    </>
  );
}

export default MovieItem;
