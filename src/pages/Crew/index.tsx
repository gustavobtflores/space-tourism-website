import { Heading3 } from "@components/Headings";
import { Content, CrewBio, CrewContainer, CrewImage, MenuItem, PageName, PageNumber, Role, SelectMenu } from "./style";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import data from "@/data/data.json";

import douglas from "@/assets/crew/image-douglas-hurley.png";
import mark from "@/assets/crew/image-mark-shuttleworth.png";
import victor from "@/assets/crew/image-victor-glover.png";
import anousheh from "@/assets/crew/image-anousheh-ansari.png";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const crewImages: string[] = [douglas, mark, victor, anousheh];

const Crew: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<number>(0);
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPerson((selectedPerson + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <Content initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} exit={{ x: -50, opacity: 0, transition: { duration: 0.5 } }}>
      <CrewContainer>
        <div>
          <PageName color="white">
            <PageNumber>02</PageNumber>MEET YOUR CREW
          </PageName>
          {data.crew.map(
            (crew, index) =>
              index === selectedPerson && (
                <AnimatePresence key={index}>
                  <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Role>{crew.role}</Role>
                    <Heading3>{crew.name}</Heading3>
                    <CrewBio>{crew.bio}</CrewBio>
                  </motion.div>
                </AnimatePresence>
              )
          )}
          <SelectMenu>
            {data.crew.map((_, index) => (
              <MenuItem key={index} selected={selectedPerson === index} onClick={() => setSelectedPerson(index)} />
            ))}
          </SelectMenu>
        </div>
        {crewImages.map(
          (image, index) =>
            selectedPerson === index && (
              <AnimatePresence key={index}>
                <CrewImage initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={image} alt="" />
              </AnimatePresence>
            )
        )}
      </CrewContainer>
    </Content>
  );
};

export default Crew;
