import { BackDrop } from "./styled";
import ModalContents from "./ModalContents";
import { useSelector } from "react-redux";
import { RootState } from "../../../appStore/store";
import { useVariants } from "../../motion/useVariants";
import { AnimatePresence } from "framer-motion";

const LocationModal = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModalAndSearchBox.showLocationModal
  );
  const { variantProps, modalVariant } = useVariants();
  return (
    <AnimatePresence>
      {isInView && (
        <BackDrop variants={modalVariant(0.5, 0)} {...variantProps}>
          <ModalContents />
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;
