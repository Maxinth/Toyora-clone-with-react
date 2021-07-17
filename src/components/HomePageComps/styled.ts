import styled from "styled-components";

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  /* overflow: scroll; */
`;
const MockBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  font-family: "Roboto", sans-serif;
`;
const Button = styled.button`
  padding: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const ViewBox = styled.div`
  font-size: 3rem;
`;
export { HomeContainer, Button, MockBox, ViewBox };
