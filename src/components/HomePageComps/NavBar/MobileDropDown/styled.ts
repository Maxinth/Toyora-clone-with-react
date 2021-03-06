import styled, { css } from "styled-components";
interface ContainerProps {
  isShown: boolean;
  showV: boolean;
}

interface NvHeaderProps {
  isShown: boolean;
}

const Container = styled.section<ContainerProps>`
  /* padding: 0.2rem 1rem; */
  transition: transform 0.3s, margin-top 0s;
  transform: translateY(-140%);
  height: 100vh;
  width: 100%;
  overflow: hidden; /* so other contents are hidden */
  margin-top: 2.4rem;
  position: relative;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  z-index: 400;

  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(5%);
      /* z-index: 700; */
      background-color: white;
    `}
  ${({ showV }) =>
    showV &&
    css`
      margin-top: -1rem;
      z-index: 700;
    `}
  
  @media (min-width: 768px) {
    display: none;
  }
`;
const ListContainer = styled.ul`
  font-family: "Roboto", sans-serif;
  padding: 0 1.5rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  /* margin-left: 1rem; */
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;
  /* border-top: 1px solid grey; */
  border-bottom: 1px solid ghostwhite;
  > svg {
    font-size: 1.1rem !important;
    color: red;
  }
`;

const NewViewContainer = styled.div<NvHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  padding: 0.5rem 0.5rem 0.5rem 1rem;
  position: relative;
  top: -1rem;
  /* position: fixed;
  top: 10px;
  left: 0;
  right: 0; */

  z-index: 600;
  /* border: 1px solid red; */
  /* margin-bottom: 1rem; */
  color: #333;
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  & svg {
    color: #333;
    font-size: 1.7rem;
  }

  & svg:first-child {
    color: red;
  }
  & svg:last-child {
    /* display: none;
    visibility: none; */
    color: black;
    /* flex: 1; */
  }

  ${({ isShown }) =>
    !isShown &&
    css`
      display: none;
    `}
`;
export { Container, ListContainer, ListItem, NewViewContainer };
