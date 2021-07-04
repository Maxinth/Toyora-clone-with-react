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

const LgNavInner = styled.div`
  padding: 1rem;
`;

export { Nav, LgNavBox, LgNavInner };
