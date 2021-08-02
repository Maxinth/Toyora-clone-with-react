import styled from "styled-components";

const Container = styled.section`
  margin-top: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;
export { Container, Image };
