import { Text, Box } from "./styled";

import LocationOnIcon from "@material-ui/icons/LocationOn";

const LgTopText = () => {
  return (
    <Box lgShow>
      <LocationOnIcon />
      <Text lg>Set your location</Text>
    </Box>
  );
};

export default LgTopText;
