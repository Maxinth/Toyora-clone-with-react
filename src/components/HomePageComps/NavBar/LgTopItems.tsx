import { LgNavInner } from "./styled";
import { data } from "./navOnLgData";

const LgTopItems = () => {
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName } = item;
        return <div key={itemName}>{itemName}</div>;
      })}
    </LgNavInner>
  );
};

export default LgTopItems;
