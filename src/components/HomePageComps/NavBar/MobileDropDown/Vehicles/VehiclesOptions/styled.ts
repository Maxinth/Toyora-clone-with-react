import styled, { css } from "styled-components";
import { NewViewContainer } from "../../styled";
export { AvContainer as Container } from "../styled";

interface ItemBox {
  namesOnly: boolean;
}

const Name = styled.p`
  text-transform: capitalize;
`;

const BtContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 20px;
  & > ${Name} {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const ItemContainer = styled.ul<ItemBox>`
  font-family: "Lato", sans-serif;
  padding: 0.5rem 2rem;
  & + ${NewViewContainer} {
    margin: 2rem 0 1rem;
    text-align: center;
    padding: 1rem;
    justify-content: center;
  }

  ${({ namesOnly }) =>
    namesOnly &&
    css`
      & ${BtContainer} {
        bottom: unset;
      }
    `}
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  padding: 0.5rem 2rem 0.5rem;
  border-bottom: 1px solid rgb(216, 216, 216);
  > * {
    line-height: inherit;
  }

  & > ${Name} {
    font-weight: 500;
  }
`;
const Price = styled.span``;
const Super = styled.sup`
  color: red;
`;

const Image = styled.img`
  object-fit: contain;
  width: 300px;
  height: 200px;
  align-self: center;

  & + ${Price} {
    position: relative;
    bottom: 40px;
    /* left: 90px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 0.9rem;
    /* font-weight: 300; */
  }
`;

const Span = styled.span``;

export {
  BtContainer,
  Image,
  Name,
  ItemContainer,
  ListItem,
  Price,
  Super,
  Span,
};
