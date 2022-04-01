import React from "react";

import { Container, NavigationItem, NavigationList, NavigationMenu, PageName, PageNumber, TechDescription, TechImage, TechInfo, TechTitle, TechWrapper } from "./styles";

import data from "@/data/data.json";
import NavLink from "@components/NavLink";

import launchVehicle from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import spacePort from "@/assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "@/assets/technology/image-space-capsule-portrait.jpg";
import { AnimatePresence } from "framer-motion";

const techImages = [launchVehicle, spacePort, spaceCapsule];

const Technology: React.FC = () => {
  const [selectedTech, setSelectedTech] = React.useState<number>(0);
  const tech = data.technology[selectedTech];

  return (
    <Container>
      <PageName color="white">
        <PageNumber>03</PageNumber>SPACE LAUNCH 101
      </PageName>
      <TechWrapper>
        <NavigationMenu>
          <NavigationList>
            {data.technology.map((item, index) => (
              <NavigationItem selected={index === selectedTech} key={index} onClick={() => setSelectedTech(index)}>
                {index + 1}
              </NavigationItem>
            ))}
          </NavigationList>
          <TechInfo>
            <NavLink>The terminology...</NavLink>
            <TechTitle>{tech.name}</TechTitle>
            <TechDescription>{tech.description}</TechDescription>
          </TechInfo>
        </NavigationMenu>
        <TechImage src={techImages[selectedTech]} />
      </TechWrapper>
    </Container>
  );
};

export default Technology;
