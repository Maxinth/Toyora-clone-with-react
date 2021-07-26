import styled, { css } from "styled-components";
import { ListItem } from "../styled";
import { BtContainer } from "./VehiclesOptions/styled";
interface AvProps {
  isInView: boolean;
  fullScreen: boolean;
  namesOnly?: boolean;
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
  overflow: hidden;
  padding-top: 1rem;
  /* z-index: 300; */
  ${({ isInView }) =>
    isInView &&
    css`
      transform: translateX(0%);
      opacity: 1;
    `}

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      height: 100%;
      overflow: scroll;
      width: 100vw;
      z-index: 800;
      /* margin-top: 1rem; */
    `}

    ${({ namesOnly }) =>
    namesOnly &&
    css`
      ${BtContainer} {
        bottom: unset;
      }
    `}

  ${ListItem} {
    font-weight: 400;
  }
`;

export { AvContainer };
