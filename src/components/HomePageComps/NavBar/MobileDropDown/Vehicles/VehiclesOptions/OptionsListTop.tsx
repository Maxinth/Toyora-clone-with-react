import { Name, Image, Super, Price } from "./styled";
import PriusPrime from "../../../../../../assets/priusprime-side.png";

const OptionsListTop = () => {
  return (
    <>
      <Name>Plug-in Hybrid</Name>
      <Image src={PriusPrime} alt="priusPrime" />
      <Price>
        $34,425 as shown<Super>1</Super>
      </Price>
    </>
  );
};

export default OptionsListTop;
