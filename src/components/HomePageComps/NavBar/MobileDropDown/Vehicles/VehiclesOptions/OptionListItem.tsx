import { ListItem, Name, Image, Super, Price } from "./styled";
import PriusPrime from "../../../../../../assets/priusprime-side.png";

const OptionListItem = () => {
  return (
    <ListItem>
      <Name>Plug-in Hybrid</Name>
      <Image src={PriusPrime} alt="priusPrime" />
      <Price>
        $34,425 as shown<Super>1</Super>
      </Price>
      <Name>2021 Prius Prime</Name>
      <Price>
        $28,220 starting <Super>1</Super>
      </Price>

      <Price>
        54/133 est. MPG<Super>61</Super>/MPGe<Super>61</Super>
      </Price>
    </ListItem>
  );
};

export default OptionListItem;
