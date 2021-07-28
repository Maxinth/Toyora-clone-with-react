import { BackDrop } from "./styled";
import ModalContents from "./ModalContents";
import { useSelector } from "react-redux";
import { RootState } from "../../../appStore/store";

const LocationModal = () => {
  const isInView = useSelector(
    (state: RootState) => state.locationModal.showLocationModal
  );
  return (
    <>
      {isInView && (
        <BackDrop>
          <ModalContents />
        </BackDrop>
      )}
    </>
  );
};

export default LocationModal;
