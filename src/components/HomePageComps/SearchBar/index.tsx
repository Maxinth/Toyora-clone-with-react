import CloseIcon from "@material-ui/icons/Close";
import { InputBox, Container, Text, Box, InnerBox } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../appStore/store";
import { toggleSearchBoxView } from "../../../features/locationModalAndSearch";

const SearchBar = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModalAndSearchBox.showSearchBox
  );

  const dispatch = useDispatch();
  return (
    <>
      {isInView && (
        <Container>
          <InnerBox>
            <Text>Search:</Text>
            <Box>
              <InputBox type="text" placeholder="type here to search" />
              <CloseIcon onClick={() => dispatch(toggleSearchBoxView())} />
            </Box>
          </InnerBox>
        </Container>
      )}
    </>
  );
};

export default SearchBar;
