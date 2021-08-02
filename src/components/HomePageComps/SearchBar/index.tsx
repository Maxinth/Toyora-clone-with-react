import CloseIcon from "@material-ui/icons/Close";
import { InputBox, MotionContainer, Text, Box, InnerBox } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../appStore/store";
import { toggleSearchBoxView } from "../../../features/locationModalAndSearch";
import { AnimatePresence } from "framer-motion";
import { useVariants } from "../../motion/useVariants";
import useInputFocus from "../useInputFocus";

const SearchBar = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModalAndSearchBox.showSearchBox
  );
  const { inputRef } = useInputFocus();

  const { variantProps, searchBoxVariant } = useVariants();
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {isInView && (
        <MotionContainer variants={searchBoxVariant(1, 0)} {...variantProps}>
          <InnerBox>
            <Text>Search:</Text>
            <Box>
              <InputBox
                type="text"
                placeholder="Type here to search"
                ref={inputRef}
              />
              <CloseIcon onClick={() => dispatch(toggleSearchBoxView())} />
            </Box>
          </InnerBox>
        </MotionContainer>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
