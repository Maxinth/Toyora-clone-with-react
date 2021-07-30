import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface TextProps {
  normal?: boolean;
  lg?: boolean;
  control?: boolean;
}

interface BoxProps {
  lgHide?: boolean;
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
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
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
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const IconContainer = styled.span`
  border: 1px solid grey;
  border-radius: 100px;
  transition: transform 0.2s, border 0.5s;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    font-size: 1rem;
    color: grey;
  }

  &:hover {
    transform: scale(1.5);
    border: 1px solid black;
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

      & + p {
        text-align: center;
        text-transform: uppercase;
        color: grey;
      }
    `}

  ${({ lg }) =>
    lg &&
    css`
      display: none;
      @media (min-width: 768px) {
        display: block;
        text-transform: uppercase;
        font-weight: bold;
      }
    `}
  ${({ control }) =>
    control &&
    css`
      /* display: none; */
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 1rem;
  padding: 0 1rem;
`;
const Input = styled.input`
  padding: 1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  border: 1px solid #333;
`;
const Submit = styled.div`
  padding: 1rem;
  background-color: grey;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  letter-spacing: 1.7;
`;

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > svg {
    font-size: 5rem;
    color: red;
  }

  ${({ lgHide }) =>
    lgHide &&
    css`
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;

export {
  Box,
  IconContainer,
  TextBox,
  Input,
  Submit,
  BackDrop,
  Container,
  ControlBox,
  Text,
};
