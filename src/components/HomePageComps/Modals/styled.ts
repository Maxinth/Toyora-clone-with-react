import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface TextProps {
  normal?: boolean;
}
const BackDrop = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* height: 100vh; */
  //set background in framer variant
  /* background: rgba(0, 0, 0, 0.7); */
  z-index: 900;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.2s;
  width: 100%;
  @media (min-width: 768px) {
    padding: unset;
  }
`;

const Container = styled.div`
  background-color: #fff;
  height: 100%;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  transition: height 0.2s;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-family: "Raleway", sans-serif;
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
  margin-bottom: 3rem;
  & svg {
    font-size: 2.4rem;
    transition: transform 0.2s;
  }

  & svg:hover {
    transform: scale(1.5);
  }
`;

const Text = styled.p<TextProps>`
  font-weight: bold;
  font-size: 1.3rem;
  ${({ normal }) =>
    normal &&
    css`
      font-weight: 600;
      font-size: 1rem;
      text-align: center;
      max-width: 300px;
      margin: 0 auto;
      color: grey;
      line-height: 1.9;
    `}
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    flex: 1;
  }
`;
const Input = styled.input``;
const Submit = styled.div``;

export { TextBox, Input, Submit, BackDrop, Container, ControlBox, Text };
