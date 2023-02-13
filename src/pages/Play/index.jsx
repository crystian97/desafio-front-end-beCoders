import { ClockCounterClockwise } from "phosphor-react";
import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { PlayContainer, SidebarHistory } from "./styles";

export default function Play() {
  const { slug } = useParams();
  const optPlayerPrincipal = {
    with: "1000",
    height: "400",
    playerVars: {
      autoplay: 1,
    },
  };
  const optVideoHistory = {
    height: "200",
    width: "300",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <PlayContainer>
      <YouTube videoId={slug} opts={optPlayerPrincipal} />
      <SidebarHistory>
        <h2>
          <ClockCounterClockwise size={32} weight="fill" />
          Ultimos videos assistidos
          <YouTube videoId={slug} opts={optVideoHistory} />
        </h2>
      </SidebarHistory>
    </PlayContainer>
  );
}
