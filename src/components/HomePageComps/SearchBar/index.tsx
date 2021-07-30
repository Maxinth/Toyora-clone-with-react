import CloseIcon from "@material-ui/icons/Close";
import { InputBox, Container, Text, Box } from "./styled";

const SearchBar = () => {
  return (
    <Container>
      <Text>Search:</Text>
      <Box>
        <InputBox type="text" placeholder="type here to search" />
        <CloseIcon />
      </Box>
    </Container>
  );
};

export default SearchBar;
