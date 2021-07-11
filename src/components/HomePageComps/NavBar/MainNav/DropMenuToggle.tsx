import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { RootState } from "../../../../appStore/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../../../../features/MobileDropDown/mobileDropDownSlice";

const DropMenuToggle = () => {
  const isOpen = useSelector((state: RootState) => state.hamburger.isOpen);
  const dispatch = useDispatch();
  return (
    <IconButton onClick={() => dispatch(toggleView())}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default DropMenuToggle;
