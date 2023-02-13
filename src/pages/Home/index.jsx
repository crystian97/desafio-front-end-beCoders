import Header from "../../components/Header";
import { HomeContainer, HomeVideosWrapper } from "./styles";
import { API } from "../../services/Api";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export default function Home() {
  const [homeVideos, setHomeVideos] = useState([]);
  const optsYoutubePlayer = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  async function getHomeVideos() {
    await API.get("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        key: "AIzaSyAQ1rdGyNlDJtVC-2hTeQJPoR4Jh9bSQHs",
      },
    })
      .then((response) => {
        response = response.data.items;
        console.log(response);
        setHomeVideos(response);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getHomeVideos();
  }, []);
  return (
    <HomeContainer>
      <Header />
      <HomeVideosWrapper></HomeVideosWrapper>
    </HomeContainer>
  );
}
