import { HomeContainer } from "./styled";
import Navbar from "./NavBar";
import MockComponent from "./MockComponents";

const HomePage = () => {
  return (
    <HomeContainer>
      <Navbar />
      <MockComponent />
    </HomeContainer>
  );
};

export default HomePage;
