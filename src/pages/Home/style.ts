import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled(motion.main)`
  margin-top: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin-top: 100px;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    margin-top: 48px;
  }
`;

const TextWrapper = styled.div`
  max-width: 450px;
`;

const Explore = styled(motion.span)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-family: "Bellefair", sans-serif;
  width: 242px;
  height: 242px;
  border-radius: 100%;
  background-color: #ffffff;
  align-self: flex-end;
  color: #000000;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 48px rgba(255, 255, 255, 0.2);
  }

  @media screen and (max-width: 992px) {
    align-self: unset;
  }

  @media screen and (max-width: 640px) {
    width: 150px;
    height: 150px;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 1.25px;
  }
`;

export { Content, TextWrapper, Explore };
