import styled from "styled-components";

const Container = styled.section`
  background-color: #fff;
  position: relative;
  z-index: 990;
  height: 60vh;
  transition: height 0.2s;
  @media (min-width: 768px) {
    height: 100vh;
  }
`;
const InputBox = styled.input``;

const Span = styled.span``;

const Text = styled.p``;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Container, InputBox, Text, Span, Box };
