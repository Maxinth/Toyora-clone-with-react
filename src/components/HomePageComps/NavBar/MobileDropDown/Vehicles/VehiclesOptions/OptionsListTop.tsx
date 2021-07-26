import { Name, Image, Super, Price } from "./styled";
import { FC } from "react";

interface Props {
  initName: string;
  imageSrc: string;
  price: string;
}
const OptionsListTop: FC<Props> = ({ initName, imageSrc, price }) => {
  return (
    <>
      {initName && <Name>{initName}</Name>}
      <Image src={imageSrc} alt={initName} />
      <Price>
        ${price} as shown<Super>1</Super>
      </Price>
    </>
  );
};

export default OptionsListTop;
