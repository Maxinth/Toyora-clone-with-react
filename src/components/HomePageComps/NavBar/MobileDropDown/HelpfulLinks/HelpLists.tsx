import { ListItem } from "./styled";
import { data } from "./data";

const HelpLists = () => {
  return (
    <>
      {data.map((item: string) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </>
  );
};

export default HelpLists;
