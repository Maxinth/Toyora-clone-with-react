import styled from "styled-components";

const Nav = styled.nav``;
const LgNavBox = styled.section`
  display: none;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding-right: 0.8rem;
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
  padding: 0.9rem;
  & > a {
    /* padding: 0.2rem; */
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
    transition: color 0.2s;
    color: #58595b;
    letter-spacing: 1.1px;
    :hover {
      color: red;
    }
  }
`;

export { Nav, LgNavBox, LgNavInner, ListItem };
