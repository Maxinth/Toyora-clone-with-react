import styled from "styled-components";
import { motion } from "framer-motion";

const BackDrop = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* height: 100vh; */
  background: rgba(0, 0, 0, 0.7);
  z-index: 900;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.2s;
  @media (min-width: 768px) {
    padding: unset;
  }
`;

const Container = styled.div`
  background-color: #fff;
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0.5rem;
  transition: height 0.2s;
  @media (min-width: 768px) {
    height: 70%;
  }
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: "Raleway", sans-serif;
  & svg {
    font-size: 2.4rem;
  }
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

export { BackDrop, Container, ControlBox, Text };
