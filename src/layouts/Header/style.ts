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
`;

const Line = styled.span`
  width: 473px;
  height: 1px;
  border: 1px solid #ffffff;
  opacity: 25%;
  position: absolute;
  z-index: 100;
  left: calc(48px + 64px);
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
`;

const Underline = styled(motion.span)`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 3px;
  background: #ffffff;
`;

export { Container, Line, Navbar, SLink, Links, LinkItem, Underline };
