import OptionsLayout from "../OptionsLayout";
import HelpLists from "./HelpLists";
import NewViewHeader from "../NewViewHeader";
import { RootState } from "../../../../../appStore/store";
import { useSelector } from "react-redux";
import { data } from "./data";

const HelpfulLinks = () => {
  const isInView = useSelector(
    (state: RootState) => state.helpFulLinks.showHelpFulLinks
  );
  return (
    <OptionsLayout isInView={isInView} fullScreen={isInView}>
      <NewViewHeader title="Helpful Links" />
      <HelpLists data={data} />
    </OptionsLayout>
  );
};

export default HelpfulLinks;
