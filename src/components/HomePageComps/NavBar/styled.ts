import styled from "styled-components";

const Nav = styled.nav`
  /* padding: 0.8rem 0.4rem; */
  position: fixed;
  z-index: 500;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  box-shadow: 1px 2px 2px ghostwhite;
  border: 1px solid red;
`;
const LgNavBox = styled.section`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding-right: 0.9rem;
    background-color: ghostwhite;
    /* background-color: #333; */
    box-shadow: 1px 1px 3px grey;
  }
`;

const LgNavInner = styled.ul`
  /* padding: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin: 0 1rem 0 auto;
  max-width: 900px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 0.2rem;
  transition: color 0.2s;

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
      > * {
        color: inherit;
      }
    }
  }
  & > svg {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
  &:hover {
    color: red;
  }
  &:not(:last-child)::after {
    content: " |";
    margin: 0 0.7rem 0 1.1rem;
    color: grey;
  }
`;

export { Nav, LgNavBox, LgNavInner, ListItem };
