import styled from "styled-components";

const Nav = styled.nav``;
const LgNavBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background-color: ghostwhite;
  }
`;

export { Nav, LgNavBox };
