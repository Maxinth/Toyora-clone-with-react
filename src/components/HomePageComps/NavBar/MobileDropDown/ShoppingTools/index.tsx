import NewViewHeader from "../NewViewHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../appStore/store";
import ShoppingToolsList from "./ShoppingToolsList";
import FurtherDetails from "../FurtherDetails";
import { moreDetails } from "./data";
import OptionsLayout from "../OptionsLayout";

const ShoppingTools = () => {
  const isInView = useSelector(
    (state: RootState) => state.shoppingTools.showShoppingTools
  );
  return (
    <OptionsLayout isInView={isInView}>
      <NewViewHeader title="Shopping Tools" />
      <ShoppingToolsList />
      <FurtherDetails details={moreDetails} />
    </OptionsLayout>
  );
};

export default ShoppingTools;
