import { BackDrop } from "./styled";
import ModalContents from "./ModalContents";
import { useSelector } from "react-redux";
import { RootState } from "../../../appStore/store";
import { useVariants } from "../../motion/useVariants";

const LocationModal = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModal.showLocationModal
  );
  const { variantProps, pageVariant } = useVariants();
  return (
    <>
      {isInView && (
        <BackDrop variants={pageVariant()} {...variantProps}>
          <ModalContents />
        </BackDrop>
      )}
    </>
  );
};

export default LocationModal;
