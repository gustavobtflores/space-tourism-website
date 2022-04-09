import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 55px;
  position: relative;

  @media screen and (max-width: 992px) {
    margin: 0;
  }
`;

const HeaderLogo = styled.img`
  @media screen and (max-width: 992px) {
    margin-left: 40px;
  }

  @media screen and (max-width: 640px) {
    margin: 0;
  }
`;

const Line = styled.span`
  width: 473px;
  height: 1px;
  border: 1px solid #ffffff;
  opacity: 25%;
  position: absolute;
  z-index: 100;
  left: calc(48px + 64px);

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

const Navbar = styled.nav`
  background: #ffffff0a;
  backdrop-filter: blur(81.5485px);
  height: 96px;
  max-width: 830px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    max-width: 450px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 48px;
`;

const LinkItem = styled.li`
  position: relative;
  padding: 38px 0;
`;

const SLink = styled(Link)`
  color: #ffffff;
  font-family: "Barlow Condensed", sans-serif;
  text-decoration: none;
  letter-spacing: 2.7px;
  font-size: 16px;

  @media screen and (max-width: 992px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 2.35px;
  }
`;

const LinkNumber = styled.span`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const HamburgerMenu = styled(motion.div)`
  @media screen and (min-width: 639.97px) {
    display: none;
  }
`;

export { Container, Line, Navbar, SLink, Links, LinkItem, LinkNumber, HeaderLogo, HamburgerMenu };
