import { HelpLinksContainer } from "./styled";
import HelpLists from "./HelpLists";
import NewViewHeader from "../NewViewHeader";

const HelpfulLinks = () => {
  return (
    <HelpLinksContainer isInView={false}>
      <NewViewHeader title="Helpful Links" />
      <HelpLists />
    </HelpLinksContainer>
  );
};

export default HelpfulLinks;
