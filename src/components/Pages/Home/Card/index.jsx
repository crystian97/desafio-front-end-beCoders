import React from "react";
import { CardContainer, Infos, Thumbnail } from "./styles";

export default function Card({ thumbnail, title }) {
  return (
    <CardContainer>
      <Thumbnail src={thumbnail} />
      <Infos>
        <h2>{title}</h2>
      </Infos>
    </CardContainer>
  );
}
