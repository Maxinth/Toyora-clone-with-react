import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1rem 2rem; */
  @media (min-width: 768px) {
    position: relative;
    top: 3px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
  transition: all 0.2s;
  :first-child {
    width: 90px;
    height: 90px;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    :first-child {
      width: 60px;
      height: 50px;
    }
  }
`;
const LogoContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* position: relative;
  top: -43px; */
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0.2rem;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    font-size: 2.3rem;
  }

  & svg + svg {
    margin-left: 0.2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export { RightContainer, Container, Image, LogoContainer, InnerContainer };
