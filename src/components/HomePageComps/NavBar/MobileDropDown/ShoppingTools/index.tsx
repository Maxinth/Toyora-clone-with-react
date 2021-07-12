import { ShoppingToolsContainer } from "./styled";
import NewViewHeader from "../NewViewHeader";

const ShoppingTools = () => {
  return (
    <ShoppingToolsContainer isInView={false}>
      <NewViewHeader title="shopping tools" />
    </ShoppingToolsContainer>
  );
};

export default ShoppingTools;
