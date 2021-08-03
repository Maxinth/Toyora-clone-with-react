import { Container, Image } from "./styled";
import ImgOne from "../../../assets/venza.png";

const BannerSlider = () => {
  return (
    <Container>
      <Image src={ImgOne} alt="venza" />
      <div>slider goes here</div>
    </Container>
  );
};

export default BannerSlider;
