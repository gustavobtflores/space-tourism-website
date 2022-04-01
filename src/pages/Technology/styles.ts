import { BodyText, Heading3, Heading4 } from "@components/Headings";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: 160px;
`;

const PageNumber = styled.span`
  opacity: 0.5;
  margin-right: 12px;
  font-weight: 700;
`;

const PageName = styled(Heading4)`
  margin-bottom: 100px;
  letter-spacing: 4.7px;
  font-family: "Barlow Condensed", serif;
`;

const TechWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NavigationMenu = styled.nav`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-right: 80px;
`;

const NavigationItem = styled.li<{ selected?: boolean }>`
  height: 80px;
  width: 80px;
  font-family: "Bellefair", serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;

  ${({ selected }) => selected && `background-color: #ffffff; color: #000000;`}
`;

const TechInfo = styled(motion.div)``;

const TechTitle = styled(Heading3)`
  margin-top: 12px;
  margin-bottom: 18px;
`;

const TechDescription = styled(BodyText)`
  max-width: 445px;
`;

const TechImage = styled(motion.img)`
  margin-left: auto;
`;

export { Container, PageName, PageNumber, TechWrapper, NavigationMenu, NavigationList, NavigationItem, TechInfo, TechTitle, TechDescription, TechImage };
