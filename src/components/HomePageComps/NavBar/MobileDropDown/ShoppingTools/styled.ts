import styled from "styled-components";
import { AvContainer as ShoppingToolsContainer } from "../Vehicles/styled";
import { ListItem } from "../styled";

const ShopListItem = styled(ListItem)`
  /* display: block; */
  justify-content: unset;
  align-items: center;
  /* justify-content: space-between; */
  max-width: 220px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  font-size: 0.9rem;
  > svg {
    font-size: 1.6rem;
  }
`;

const Name = styled.span`
  margin-left: 0.5rem;
`;

export { ShoppingToolsContainer, ShopListItem, Name };
