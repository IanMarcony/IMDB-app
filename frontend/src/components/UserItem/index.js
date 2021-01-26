import React from "react";

import ImageIconPerson from "../../assets/images/user.svg";

import { Container, ImagePerson, NamePerson } from "./styles";

function UserItem({ image, name }) {
  return (
    <>
      <Container>
        <ImagePerson src={image ? image : ImageIconPerson} />
        <NamePerson>{name}</NamePerson>
      </Container>
    </>
  );
}

export default UserItem;
