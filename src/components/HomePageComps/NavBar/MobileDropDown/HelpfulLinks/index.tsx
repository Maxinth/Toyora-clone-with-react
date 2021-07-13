import { HelpLinksContainer } from "./styled";
import HelpLists from "./HelpLists";
import NewViewHeader from "../NewViewHeader";
import { RootState } from "../../../../../appStore/store";
import { useSelector } from "react-redux";

const HelpfulLinks = () => {
  const isInView = useSelector(
    (state: RootState) => state.helpFulLinks.showHelpFulLinks
  );
  return (
    <HelpLinksContainer isInView={isInView}>
      <NewViewHeader title="Helpful Links" />
      <HelpLists />
    </HelpLinksContainer>
  );
};

export default HelpfulLinks;
