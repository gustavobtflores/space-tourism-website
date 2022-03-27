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
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 48px rgba(255, 255, 255, 0.2);
  }
`;

export { Content, TextWrapper, Explore };
