import React from "react";
import {
  CardContainer,
  ChannelAvatar,
  Credits,
  Infos,
  Thumbnail,
} from "./styles";

export default function Card({ thumbnail, title, channelAvatar, description }) {
  return (
    <CardContainer>
      <Thumbnail src={thumbnail} />
      <Credits>
        <ChannelAvatar src={channelAvatar} />
      </Credits>
      <Infos>
        <h2>{title}</h2>
        <p>{description}</p>
      </Infos>
    </CardContainer>
  );
}
