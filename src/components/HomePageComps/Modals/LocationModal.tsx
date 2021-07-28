import { BackDrop } from "./styled";
import ModalContents from "./ModalContents";
import { useSelector } from "react-redux";
import { RootState } from "../../../appStore/store";
import { useVariants } from "../../motion/useVariants";
import { AnimatePresence } from "framer-motion";

const LocationModal = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModal.showLocationModal
  );
  const { variantProps, pageVariant } = useVariants();
  return (
    <AnimatePresence>
      {isInView && (
        <BackDrop variants={pageVariant(1, 0)} {...variantProps}>
          <ModalContents />
        </BackDrop>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;
