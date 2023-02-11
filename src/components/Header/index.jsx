import { HeaderContainer, LoginButton, SearchForm } from "./styles";
import youtubeLogo from "../../assets/img/youtubeLogo.svg";
import { MagnifyingGlass, UserCircle } from "phosphor-react";
export default function Header() {
  return (
    <HeaderContainer>
      <img src={youtubeLogo} alt="" />
      <SearchForm>
        <input type="text" />
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
