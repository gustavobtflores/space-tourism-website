import styled from "styled-components";
import { motion } from "framer-motion";
import NavLink from "@/components/NavLink";

const Content = styled(motion.main)`
  margin-top: 76px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
`;

const Astro = styled(motion.div)`
  margin-left: 58px;
`;

const Navbar = styled.nav`
  margin-bottom: 36px;
`;

const DestinationsList = styled.ul`
  display: flex;
  list-style: none;
  color: #ffffff;
`;

const AstroItem = styled(NavLink)`
  margin-right: 36px;
  cursor: pointer;
  position: relative;
  padding-bottom: 12px;
`;

const DestinationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DestinationsTexts = styled(motion.div)``;

const Separator = styled.div`
  background-color: #383b4b;
  width: 100%;
  height: 1px;
  margin-bottom: 28px;
`;

const AstroInfo = styled.div`
  display: flex;
  gap: 60px;
`;

export { Content, Astro, Navbar, DestinationsList, AstroItem, DestinationsWrapper, DestinationsTexts, Separator, AstroInfo };
