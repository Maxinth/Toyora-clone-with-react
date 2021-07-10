import styled from "styled-components";
import { Props as SpanIconProps } from "./DropDownToggle";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1rem 2rem; */
  @media (min-width: 768px) {
    position: relative;
    top: 3px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
  transition: all 0.2s;
  :first-child {
    width: 90px;
    height: 90px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    :first-child {
      width: 60px;
      height: 50px;
    }
  }
`;
const LogoContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* position: relative;
  top: -43px; */
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.5rem;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    font-size: 2.3rem;
  }

  & svg + svg {
    margin-left: 0.2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const LgRightContainer = styled.ul`
  font-family: "Roboto", sans-serif;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  color: rgb(88, 89, 91);
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  &:last-child {
    background-color: red;
    color: white;
  }
  @media (min-width: 812px) {
    flex-direction: row;
  }
`;
const Span = styled.span<SpanIconProps>`
  svg {
    color: red;
  }
`;
export {
  RightContainer,
  LgRightContainer,
  Container,
  Image,
  LogoContainer,
  InnerContainer,
  ListItem,
  Span,
};
