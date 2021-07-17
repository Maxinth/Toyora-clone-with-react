import styled from "styled-components";
export { AvContainer as Container } from "../styled";

const ItemContainer = styled.ul`
  font-family: "Lato", sans-serif;
  padding: 1rem 2rem;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  padding: 0.5rem 2rem 1.5rem;
  border-bottom: 1px solid rgb(216, 216, 216);
  > * {
    line-height: inherit;
  }
`;
const Price = styled.span``;
const Super = styled.sup`
  color: red;
`;

const Name = styled.p``;

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

const BtContainer = styled.div`
  & > ${Name} {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export { BtContainer, Image, Name, ItemContainer, ListItem, Price, Super };
