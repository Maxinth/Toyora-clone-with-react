import { AvContainer as Container } from "./Vehicles/styled";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  isInView: boolean;
  fullScreen: boolean;
}
const OptionsLayout: FC<Props> = ({
  children,
  isInView,
  fullScreen = false,
}) => {
  return (
    <Container isInView={isInView} fullScreen={fullScreen}>
      {children}
    </Container>
  );
};

export default OptionsLayout;
