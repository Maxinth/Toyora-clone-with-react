import { BtContainer, Name, Super, Price } from "./styled";

const OptionsListBottom = () => {
  return (
    <BtContainer>
      <Name>2021 Prius Prime</Name>
      <Price>
        $28,220 starting <Super>1</Super>
      </Price>

      <Price>
        54/133 est. MPG<Super>61</Super>/MPGe<Super>61</Super>
      </Price>
    </BtContainer>
  );
};

export default OptionsListBottom;
