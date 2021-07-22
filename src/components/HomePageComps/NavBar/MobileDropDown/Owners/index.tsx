import OptionsLayout from "../OptionsLayout";
import OwnersList from "../HelpfulLinks/HelpLists";
import NewViewHeader from "../NewViewHeader";
import { RootState } from "../../../../../appStore/store";
import { useSelector } from "react-redux";
import { data } from "./data";

const Owners = () => {
  const isInView = useSelector((state: RootState) => state.owners.showOwners);
  return (
    <OptionsLayout isInView={isInView} fullScreen={isInView}>
      <NewViewHeader title="Owners" />
      <OwnersList data={data} />
    </OptionsLayout>
  );
};

export default Owners;
