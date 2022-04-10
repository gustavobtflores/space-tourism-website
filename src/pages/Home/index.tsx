import { BodyText, Heading1, Heading5 } from "@components/Headings";
import { Link } from "react-router-dom";
import { Content, TextWrapper, Explore } from "./style";

const styles = {
  h1: {
    marginBottom: "24px",
  },
  link: {
    textDecoration: "none",
  },
};

const Home = () => {
  return (
    <>
      <Content initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} exit={{ x: -50, opacity: 0, transition: { duration: 0.5 } }}>
        <TextWrapper>
          <Heading5 color="blue">SO, YOU WANT TO TRAVEL TO</Heading5>
          <Heading1 style={styles.h1}>SPACE</Heading1>
          <BodyText>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</BodyText>
        </TextWrapper>
        <Link style={styles.link} to="/destination">
          <Explore>EXPLORE</Explore>
        </Link>
      </Content>
    </>
  );
};

export default Home;
