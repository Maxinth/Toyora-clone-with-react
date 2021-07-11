import styled, { css } from "styled-components";

interface ContainerProps {
  isShown: boolean;
}

const Container = styled.section<ContainerProps>`
  padding: 0.2rem 1rem;
  transition: transform 0.5s;
  transform: translateY(-140%);
  height: 100%;
  margin-top: 5rem;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(5%);
    `}
  @media (min-width: 768px) {
    display: none;
  }
`;
const ListContainer = styled.ul`
  font-family: "Roboto", sans-serif;
  padding: 0 1rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bolder;
  cursor: pointer;
  /* border-top: 1px solid grey; */
  border-bottom: 1px solid grey;
  > svg {
    font-size: 1.1rem !important;
    color: red;
  }
`;

const NewViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export { Container, ListContainer, ListItem, NewViewContainer };
