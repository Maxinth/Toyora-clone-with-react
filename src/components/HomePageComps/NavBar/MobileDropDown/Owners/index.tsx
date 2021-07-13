import { HelpLinksContainer as OwnersContainer } from "../HelpfulLinks/styled";
import OwnersList from "../HelpfulLinks/HelpLists";
import NewViewHeader from "../NewViewHeader";
import { RootState } from "../../../../../appStore/store";
import { useSelector } from "react-redux";
import { data } from "./data";

const Owners = () => {
  const isInView = useSelector((state: RootState) => state.owners.showOwners);
  return (
    <OwnersContainer isInView={isInView}>
      <NewViewHeader title="Owners" />
      <OwnersList data={data} />
    </OwnersContainer>
  );
};

export default Owners;
