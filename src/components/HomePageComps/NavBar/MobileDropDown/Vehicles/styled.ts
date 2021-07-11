import styled, { css } from "styled-components";

interface AvProps {
  isInView: boolean;
}
const AvContainer = styled.section<AvProps>`
  position: absolute;
  transform: translateX(100%);
  transition: transform 0.5s;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;
  ${({ isInView }) =>
    isInView &&
    css`
      transform: translateX(0%);
    `}
`;

export { AvContainer };
