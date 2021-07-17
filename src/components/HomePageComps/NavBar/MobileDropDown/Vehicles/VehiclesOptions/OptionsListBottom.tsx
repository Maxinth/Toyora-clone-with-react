import { BtContainer, Name, Super, Price } from "./styled";
import { FC } from "react";

interface Props {
  mainName: string;
  firstPriceText: string;
  est: string;
  MPG: number;
  MPGe: number;
}
const OptionsListBottom: FC<Props> = ({
  mainName,
  firstPriceText,
  est,
  MPG,
  MPGe,
}) => {
  return (
    <BtContainer>
      <Name>{mainName}</Name>
      <Price>
        ${firstPriceText} starting <Super>1</Super>
      </Price>
      <Price>
        {est}est.
        {MPG !== 0 && (
          <span>
            MPG <Super> {MPG}</Super>
          </span>
        )}
        {MPGe !== 0 && (
          <span>
            MPGe<Super>{MPGe}</Super>
          </span>
        )}
      </Price>
    </BtContainer>
  );
};

export default OptionsListBottom;
