import styled from "styled-components";

const Container = styled.section`
  background-color: #fff;
  position: relative;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 990;
  height: 60vh;
  transition: height 0.2s;
  width: 100%;
  @media (min-width: 768px) {
    height: 100vh;
    margin-top: 7rem;
  }
`;

const InnerBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const InputBox = styled.input``;

const Span = styled.span``;

const Text = styled.p``;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Container, InnerBox, InputBox, Text, Span, Box };
