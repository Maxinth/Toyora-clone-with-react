import { ShoppingToolsContainer } from "./styled";
import NewViewHeader from "../NewViewHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../appStore/store";
import ShoppingToolsList from "./ShoppingToolsList";

const ShoppingTools = () => {
  const isInView = useSelector(
    (state: RootState) => state.shoppingTools.showShoppingTools
  );
  return (
    <ShoppingToolsContainer isInView={isInView}>
      <NewViewHeader title="Shopping Tools" />
      <ShoppingToolsList />
    </ShoppingToolsContainer>
  );
};

export default ShoppingTools;
