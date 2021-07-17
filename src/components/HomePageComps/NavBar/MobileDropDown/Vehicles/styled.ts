import styled, { css } from "styled-components";
import { ListItem } from "../styled";
interface AvProps {
  isInView: boolean;
}
const AvContainer = styled.section<AvProps>`
  position: absolute;
  transform: translateX(100%);
  transition: transform 0.5s, opacity 0.8s;
  opacity: 0;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  margin-top: -0.1rem;
  height: 100vh;
  z-index: 300;
  ${({ isInView }) =>
    isInView &&
    css`
      transform: translateX(0%);
      opacity: 1;
    `}

  ${ListItem} {
    font-weight: 400;
  }
`;

export { AvContainer };
