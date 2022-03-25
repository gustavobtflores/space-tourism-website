import background from "@/assets/home/background-home-desktop.jpg";
import Header from "@layouts/Header";
import AppBody from "@theme/styled/AppBody";
import Container from "@theme/styled/Container";

const Home = () => {
  return (
    <>
      <AppBody>
        <Container backgroundImage={background}>
          <Header />
        </Container>
      </AppBody>
    </>
  );
};

export default Home;
