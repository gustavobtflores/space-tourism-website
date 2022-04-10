import styled from "styled-components";
import { motion } from "framer-motion";
import NavLink from "@/components/NavLink";
import { BodyText, Heading2, Heading5 } from "@components/Headings";

const Content = styled(motion.main)`
  margin-top: 76px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  width: 100%;
  padding: 40px 0;

  @media screen and (max-width: 992px) {
    margin-top: 0;
  }
`;

const Astro = styled(motion.div)`
  margin-left: 58px;

  @media screen and (max-width: 992px) {
    margin-left: 0;
  }
`;

const PageTitle = styled(Heading5)`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

const Navbar = styled.nav`
  margin-bottom: 36px;
`;

const DestinationsList = styled.ul`
  display: flex;
  list-style: none;
  color: #ffffff;
  gap: 36px;
`;

const AstroName = styled(Heading2)`
  @media screen and (max-width: 992px) {
    font-size: 80px;
  }
`;

const AstroItem = styled(NavLink)`
  cursor: pointer;
  position: relative;
  padding-bottom: 12px;
`;

const AstroDescription = styled(BodyText)`
  margin-bottom: 50px;

  @media screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

const DestinationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
`;

const DestinationsTexts = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

const AstroImage = styled(motion.img)`
  display: block;

  @media screen and (max-width: 992px) {
    width: 300px;
    height: 300px;
  }
`;

const Separator = styled.div`
  background-color: #383b4b;
  width: 100%;
  height: 1px;
  margin-bottom: 28px;
`;

const AstroInfoWrapper = styled.div`
  min-width: 390px;
  max-width: 445px;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding: 0 90px;
  }
`;

const AstroInfo = styled.div`
  display: flex;
  gap: 60px;
`;

export { Content, Astro, Navbar, DestinationsList, AstroItem, DestinationsWrapper, DestinationsTexts, Separator, AstroInfo, AstroInfoWrapper, AstroImage, AstroName, AstroDescription, PageTitle };
