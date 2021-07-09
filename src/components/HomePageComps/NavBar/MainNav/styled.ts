import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;
const Image = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
  :first-child {
    width: 150px;
    height: 150px;
  }
`;
const LogoContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  top: -43px;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;
export { Container, Image, LogoContainer, InnerContainer };
