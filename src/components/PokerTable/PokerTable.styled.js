import styled from 'styled-components';

const NavBarWrapper = styled.nav `
  padding: 10px 30px;
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #4c768d;
  color: #242443;
  height: 60px;
  flex-basis: 100%;
  flex-shrink: 0;

  .sign-in {
    border: none;
    background-color: transparent;
  }
  .sign-in > img {
    height: 30px;
    width: auto;
  }
  .sign-out {
    padding: 5px 10px;
    border-radius: 5px;
    color: #88dded;
    border: 1px solid #1c2c4c;
    background-color: #1c2c4c;
    font-weight: 600;
  }
`;

const HeaderTitle = styled.h1 `
  
`;

const AuthButton = styled.h1 `
  
`;

export {
    NavBarWrapper,
    HeaderTitle,
    AuthButton,
  };