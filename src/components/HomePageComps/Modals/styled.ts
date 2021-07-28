import styled from "styled-components";

const BackDrop = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  top: -70px;
  bottom: 0;
  /* height: 100vh; */
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  cursor: pointer;
`;

export { BackDrop };
