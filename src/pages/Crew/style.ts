import { BodyText, Heading4 } from "@components/Headings";
import styled from "styled-components";
import { motion } from "framer-motion";

interface MenuItemProps {
  selected?: boolean;
}

const Content = styled(motion.main)`
  display: flex;
  flex-direction: column;
  margin-top: 76px;
  margin-left: 160px;
  height: 100%;
  overflow: hidden;
`;

const CrewContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Role = styled(Heading4)`
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: 400;
  font-family: "Bellefair", serif;
`;

const PageNumber = styled.span`
  opacity: 0.5;
  margin-right: 12px;
  font-weight: 700;
`;

const PageName = styled(Heading4)`
  margin-bottom: 150px;
  letter-spacing: 4.7px;
  font-family: "Barlow Condensed", serif;
`;

const CrewBio = styled(BodyText)`
  max-width: 445px;
  margin-top: 28px;
  height: 160px;
`;

const SelectMenu = styled.div`
  display: flex;
  margin-top: 120px;
`;

const MenuItem = styled.button<MenuItemProps>`
  background-color: #ffffff;
  border: none;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 24px;
  }

  ${({ selected }) => selected && `opacity: 1;`}
`;

const CrewImage = styled(motion.img)`
  margin-left: 80px;
  align-self: flex-end;
`;

export { Content, Role, PageNumber, PageName, CrewBio, SelectMenu, MenuItem, CrewContainer, CrewImage };
