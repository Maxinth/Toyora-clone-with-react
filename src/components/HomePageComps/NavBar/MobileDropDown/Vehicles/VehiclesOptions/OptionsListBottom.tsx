import { BtContainer, Name, Super, Price, Span } from "./styled";
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
          <Span>
            MPG <Super> {MPG}</Super>
          </Span>
        )}
        {MPGe !== 0 && (
          <Span>
            MPGe<Super>{MPGe}</Super>
          </Span>
        )}
      </Price>
    </BtContainer>
  );
};

export default OptionsListBottom;
