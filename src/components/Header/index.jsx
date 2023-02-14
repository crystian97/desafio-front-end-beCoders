import { HeaderContainer, LoginButton, SearchForm } from "./styles";
import youtubeLogo from "../../assets/img/youtubeLogo.svg";
import { MagnifyingGlass, UserCircle } from "phosphor-react";
import { useState } from "react";
import { API } from "../../services/Api";
export default function Header() {
  const [searchVideo, setSearchVideo] = useState([]);
  const [queryToSearch, setQueryToSearch] = useState("");
  function handleChange(event) {
    setQueryToSearch(event.target.value);
  }
  async function getVideosFromSearch(e) {
    e.preventDefault();
    console.log();
    await API.get("/search", {
      params: {
        part: "snippet",
        key: "AIzaSyAQ1rdGyNlDJtVC-2hTeQJPoR4Jh9bSQHs",
        q: queryToSearch,
        maxResults: 50,
      },
    })
      .then((response) => (response = response.data))
      .then((data) => setSearchVideo(data))
      .catch((error) => console.log(error));
    console.log(searchVideo);
  }
  return (
    <HeaderContainer>
      <img src={youtubeLogo} alt="" />
      <SearchForm onSubmit={(e) => getVideosFromSearch(e)}>
        <input type="text" name="queryToSearch" onChange={handleChange} />
        <button type="submit">
          <MagnifyingGlass size={32} />
        </button>
      </SearchForm>
      <LoginButton>
        <UserCircle size={32} /> Entrar
      </LoginButton>
    </HeaderContainer>
  );
}
