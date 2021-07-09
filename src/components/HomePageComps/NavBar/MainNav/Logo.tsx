import FlagImage from "../../../../assets/flag.jpg";
// import LogoImage from "../../../../assets/download.jfif";
import { Image, LogoContainer } from "./styled";

const Logo = () => {
  return (
    <LogoContainer>
      {/* <Image src={LogoImage} alt="logoImage" /> */}
      <Image src={FlagImage} alt="FlagImage" />
    </LogoContainer>
  );
};

export default Logo;
