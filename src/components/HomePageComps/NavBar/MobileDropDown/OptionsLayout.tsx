import { AvContainer as Container } from "./Vehicles/styled";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  isInView: boolean;
}
const OptionsLayout: FC<Props> = ({ children, isInView }) => {
  return <Container isInView={isInView}>{children}</Container>;
};

export default OptionsLayout;
