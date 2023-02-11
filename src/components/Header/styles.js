import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
`;
export const SearchForm = styled.form`
  width: 635px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 572px;
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 99px 0px 0px 99px;
    background: #ffffff;
    border: 1px solid #cccccc;
    color: #7d7d7d;
    padding-left: 17px;
    &:focus {
      outline: none;
    }
  }
  button {
    flex: 1;
    border: 1px solid #c6c6c6;
    border-radius: 0px 99px 99px 0px;
    background: #f0f0f0;
    border: 1px solid #c6c6c6;
    height: 40px;
  }
  button:hover {
    cursor: pointer;
  }
`;

export const LoginButton = styled.button`
  width: 162px;
  height: 40px;
  background: transparent;
  border: 1px solid #065fd4;
  color: #065fd4;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 11px;
  gap: 9px;
  svg {
    color: #065fd4;
  }
  &:hover {
    cursor: pointer;
  }
`;
