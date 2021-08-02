import { TextBox, Input, Submit, Text } from "./styled";
import useInputFocus from "../useInputFocus";

const ViewPortCommonContent = () => {
  const { inputRef } = useInputFocus();

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
