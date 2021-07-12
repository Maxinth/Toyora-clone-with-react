import styled from "styled-components";
import { AvContainer as ShoppingToolsContainer } from "../Vehicles/styled";
import { ListItem } from "../styled";

const ShopListItem = styled(ListItem)`
  /* display: block; */
  justify-content: flex-start;
  justify-content: space-between;
  max-width: 220px;
`;

const Name = styled.span`
  margin-right: 0.5rem;
`;

export { ShoppingToolsContainer, ShopListItem, Name };
