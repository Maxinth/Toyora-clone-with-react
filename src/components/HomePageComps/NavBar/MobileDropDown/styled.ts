import styled from "styled-components";

const Container = styled.section`
  padding: 0.2rem 1rem;
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
  /* border-top: 1px solid grey; */
  border-bottom: 1px solid grey;
  > svg {
    font-size: 1.5rem;
  }
`;
export { Container, ListContainer, ListItem };
