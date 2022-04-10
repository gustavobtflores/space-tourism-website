import React, { useState } from "react";
import { motion } from "framer-motion";

import { BodyText, Heading1, Heading2, Heading5, SubHeading1, SubHeading2 } from "@/components/Headings";
import { Content, Astro, Navbar, DestinationsList, AstroItem, DestinationsWrapper, DestinationsTexts, Separator, AstroInfo, AstroInfoWrapper, AstroImage, AstroName, AstroDescription } from "./style";

import data from "@/data/data.json";
import moon from "@/assets/destination/image-moon.webp";
import mars from "@/assets/destination/image-mars.webp";
import europa from "@/assets/destination/image-europa.webp";
import titan from "@/assets/destination/image-titan.webp";
import { AnimatePresence } from "framer-motion";
import Underline from "@/components/Underline";

const images: string[] = [moon, mars, europa, titan];

const styles = {
  span: { opacity: "0.5", marginRight: "28px", fontWeight: "700" },
  h5: { marginBottom: "64px" },
  bodytext: {},
  subheading2: { marginBottom: "12px" },
};

const Destination: React.FC = () => {
  const [selectedAstro, setSelectedAstro] = React.useState<number>(0);

  return (
    <Content initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} exit={{ x: -50, opacity: 0, transition: { duration: 0.5 } }}>
      <Heading5 color="white" style={styles.h5}>
        <span style={styles.span}>01</span>PICK YOUR DESTINATION
      </Heading5>
      <DestinationsWrapper>
        <div>
          {images.map((image, index) => (
            <Astro key={index}>
              {index === selectedAstro && (
                <AnimatePresence>
                  <AstroImage
                    key={image}
                    src={image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, -20, 0] }}
                    transition={{
                      opacity: { duration: 0.3, ease: "easeOut" },
                      y: {
                        duration: 5,
                        ease: "easeInOut",
                        times: [0, 5],
                        repeat: Infinity,
                      },
                    }}
                  />
                </AnimatePresence>
              )}
            </Astro>
          ))}
        </div>
        <AstroInfoWrapper>
          <Navbar>
            <DestinationsList>
              {data.destinations.map((destination, index) => (
                <AstroItem key={index} onClick={() => setSelectedAstro(index)}>
                  {destination.name}
                  {index === selectedAstro ? <Underline layoutId="underline" /> : null}
                </AstroItem>
              ))}
            </DestinationsList>
          </Navbar>
          <div>
            {data.destinations.map(
              (destination, index) =>
                index === selectedAstro && (
                  <AnimatePresence key={index}>
                    <DestinationsTexts key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <AstroName>{destination.name}</AstroName>
                      <AstroDescription style={styles.bodytext}>{destination.description}</AstroDescription>
                      <Separator />
                      <AstroInfo>
                        <div>
                          <SubHeading2 style={styles.subheading2}>Avg. Distance</SubHeading2>
                          <SubHeading1>{destination.distance}</SubHeading1>
                        </div>
                        <div>
                          <SubHeading2 style={styles.subheading2}>Est. travel time</SubHeading2>
                          <SubHeading1>{destination.travel}</SubHeading1>
                        </div>
                      </AstroInfo>
                    </DestinationsTexts>
                  </AnimatePresence>
                )
            )}
          </div>
        </AstroInfoWrapper>
      </DestinationsWrapper>
    </Content>
  );
};

export default Destination;
