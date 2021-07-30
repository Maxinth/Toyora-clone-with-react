import styled from "styled-components";
import { motion } from "framer-motion";

const MotionContainer = styled(motion.section)`
  background-color: #fff;
  /* position: relative; */
  position: fixed;
  left: 0;
  right: 0;
  z-index: 990;
  height: 60vh;
  transition: height 0.2s;
  width: 100%;
  padding: 1rem;
  font-family: "Raleway", sans-serif;
  margin-top: 3.5rem;
  @media (min-width: 768px) {
    height: 100vh;
    margin-top: 7rem;
  }
`;

const InnerBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 1rem;
`;
const InputBox = styled.input`
  padding: 1rem;
  outline: none;
  border: none;
  border: 1px dashed transparent;
  border-bottom: 1px solid red;
  transition: all 0.2s;
  width: 100%;
  flex: 1;
  font-size: 4rem;
  & + svg {
    font-size: 3rem;
    color: grey;
    font-weight: 300;
  }

  &::placeholder {
    font-size: 2rem;
    color: grey;
  }

  &:focus {
    border: 1px dashed black;
    border-bottom: 1px solid red;
  }
  @media (min-width: 768px) {
    & + svg {
      font-size: 5rem;
      color: grey;
      font-weight: 300;
    }

    &::placeholder {
      font-size: 4rem;
      color: grey;
    }

    &:focus {
      border: 1px dashed black;
      border-bottom: 1px solid red;
    }
  }
`;

const Span = styled.span``;

const Text = styled.p`
  font-size: 1rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { MotionContainer, InnerBox, InputBox, Text, Span, Box };
