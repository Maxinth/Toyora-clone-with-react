import { TextBox, Input, Submit, Text } from "./styled";

const ViewPortCommonContent = () => {
  return (
    <>
      <Text normal>
        Enter your Zip code to find dealers, inventory and special offers near
        you
      </Text>
      <TextBox>
        <Input type="text" />
        <Submit>submit</Submit>
      </TextBox>
    </>
  );
};

export default ViewPortCommonContent;
