import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled(motion.main)`
  margin-top: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 450px;
`;

const Explore = styled.a`
  font-size: 32px;
  font-family: "Bellefair", sans-serif;
  padding: 100px 50px;
  border-radius: 100%;
  background-color: #ffffff;
  align-self: flex-end;
  cursor: pointer;
  position: relative;
`;

export { Content, TextWrapper, Explore };
