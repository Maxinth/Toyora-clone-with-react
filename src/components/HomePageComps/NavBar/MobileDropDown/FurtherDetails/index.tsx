import { ListItem, DetailsContainer } from "./styled";
import { FC } from "react";

interface Props {
  details: string[];
}

const FurtherDetails: FC<Props> = ({ details }) => {
  return (
    <DetailsContainer>
      {details.map((item: string) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </DetailsContainer>
  );
};

export default FurtherDetails;
