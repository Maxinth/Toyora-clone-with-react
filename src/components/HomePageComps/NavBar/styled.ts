import styled from "styled-components";

const Nav = styled.nav``;
const LgNavBox = styled.section`
  display: none;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    background-color: ghostwhite;
  }
`;

const LgNavInner = styled.ul`
  /* padding: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const ListItem = styled.li`
  & > a {
    padding: 1rem;
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export { Nav, LgNavBox, LgNavInner, ListItem };
