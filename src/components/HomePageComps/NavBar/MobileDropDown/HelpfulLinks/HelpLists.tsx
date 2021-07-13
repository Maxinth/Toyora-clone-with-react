import { ListItem } from "./styled";
import { FC } from "react";

interface Props {
  data: string[];
}

const HelpLists: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item: string) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </>
  );
};

export default HelpLists;
