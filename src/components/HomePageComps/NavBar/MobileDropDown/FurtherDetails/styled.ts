import styled from "styled-components";
import { ShopListItem as ListItem } from "../ShoppingTools/styled";

const DetailsContainer = styled.ul`
  ${ListItem} {
    max-width: unset;
    width: 100%;
    margin-left: 2rem;
    /* padding: 0.2rem 0; */
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export { ListItem, DetailsContainer };
