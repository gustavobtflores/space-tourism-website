import { BodyText, Heading1, Heading5 } from "@components/Headings";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Content, TextWrapper, Explore } from "./style";

const h1 = {
  marginBottom: "24px",
};

const Home = () => {
  return (
    <>
      <Content initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
        <TextWrapper>
          <Heading5 color="blue">SO, YOU WANT TO TRAVEL TO</Heading5>
          <Heading1 style={h1}>SPACE</Heading1>
          <BodyText>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</BodyText>
        </TextWrapper>
        <Explore to="/destination">EXPLORE</Explore>
      </Content>
    </>
  );
};

export default Home;
