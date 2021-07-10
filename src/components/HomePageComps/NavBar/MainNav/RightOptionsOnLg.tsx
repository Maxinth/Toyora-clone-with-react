import { LgRightContainer } from "./styled";
import LgOption from "./LgOption";
import { data } from "./data";

const RightOptionsOnLg = () => {
  return (
    <LgRightContainer>
      {data.map((item) => {
        return <LgOption key={item.optionName} {...item} />;
      })}
    </LgRightContainer>
  );
};

export default RightOptionsOnLg;
