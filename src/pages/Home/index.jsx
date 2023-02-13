import Header from "../../components/Header";
import { HomeContainer, HomeVideosWrapper } from "./styles";
import { API } from "../../services/Api";
import { useEffect, useState } from "react";
import Card from "../../components/Pages/Home/Card";
import { Link } from "react-router-dom";

export default function Home() {
  const [homeVideos, setHomeVideos] = useState([]);

  async function getHomeVideos() {
    await API.get("/videos", {
      params: {
        chart: "mostPopular",
        key: "AIzaSyAQ1rdGyNlDJtVC-2hTeQJPoR4Jh9bSQHs",
        part: "snippet",
        maxResults: 50,
      },
    })
      .then((response) => {
        response = response.data.items;
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
      <HomeVideosWrapper>
        {homeVideos.length > 0 ? (
          homeVideos.map((video) => (
            <Link key={video.id} to={`play/${video.id}`}>
              <Card
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.standard.url}
              />
            </Link>
          ))
        ) : (
          <p>não há videos</p>
        )}
      </HomeVideosWrapper>
    </HomeContainer>
  );
}
