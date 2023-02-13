import Header from "../../components/Header";
import { HomeContainer } from "./styles";
import { API } from "../../services/Api";
import { useEffect, useState } from "react";

export default function Home() {
  const [homeVideos, setHomeVideos] = useState([]);

  async function getHomeVideos() {
    const videos = await API.get("/videos", {
      params: {
        chart: "mostPopular",
        key: "AIzaSyAQ1rdGyNlDJtVC-2hTeQJPoR4Jh9bSQHs",
      },
    })
      .then((response) => {
        response = response.data.items;
        setHomeVideos(response);
      })
      .catch((e) => console.log(e));
  }
  console.log(homeVideos);
  useEffect(() => {
    getHomeVideos();
  }, []);
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
}
