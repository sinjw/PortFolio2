import styled from "styled-components";
import { Link } from "react-router-dom";
export const Navigate = () => {
  return (
    <NavContainer>
      <LinkStyle to="/">home</LinkStyle>
      <LinkStyle to="/mainpage">about</LinkStyle>
      <LinkStyle to="/">portfolio</LinkStyle>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #333;
  border-radius: 10px;

  right: 20px;
  top: 35vh;
  @media (max-width: 550px) {
    top: 0;
    right: 0;
    width: 100vw;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
  }
`;
const LinkStyle = styled(Link)`
  color: white;
  padding: 10px;
  @media (max-width: 550px) {
    color: white;
  }
`;
