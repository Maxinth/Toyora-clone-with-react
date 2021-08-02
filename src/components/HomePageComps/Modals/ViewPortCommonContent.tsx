import { TextBox, Input, Submit, Text } from "./styled";
import useInputFocus from "../useInputFocus";
import { useSelector } from "react-redux";
import { RootState } from "../../../appStore/store";
const ViewPortCommonContent = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModalAndSearchBox.showLocationModal
  );

  const { inputRef } = useInputFocus(isInView);

  return (
    <>
      <Text normal>
        Enter your Zip code to find dealers, inventory and special offers near
        you
      </Text>
      <TextBox>
        <Input type="text" placeholder="zip code" ref={inputRef} />
        <Submit>submit</Submit>
      </TextBox>
    </>
  );
};

export default ViewPortCommonContent;
