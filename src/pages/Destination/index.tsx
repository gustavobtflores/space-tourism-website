import { useState } from "react";
import { motion } from "framer-motion";

import { BodyText, Heading1, Heading2, Heading5, SubHeading1, SubHeading2 } from "@/components/Headings";
import { Content, Astro, Navbar, DestinationsList, AstroItem, DestinationsWrapper, DestinationsTexts, Separator, AstroInfo } from "./style";

import data from "@/data/data.json";
import moon from "@/assets/destination/image-moon.webp";
import mars from "@/assets/destination/image-mars.webp";
import europa from "@/assets/destination/image-europa.webp";
import titan from "@/assets/destination/image-titan.webp";
import { AnimatePresence } from "framer-motion";
import Underline from "@/components/Underline";

const images = [moon, mars, europa, titan];

const styles = {
  span: { opacity: "0.5", marginRight: "28px", fontWeight: "700" },
  h5: { marginBottom: "64px" },
  div: { minWidth: "390px", maxWidth: "445px" },
  bodytext: { marginBottom: "50px" },
  subheading2: { marginBottom: "12px" },
};

const Destination: React.FC = () => {
  const [selectedAstro, setSelectedAstro] = useState(0);

  return (
    <Content initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
      <Heading5 color="white" style={styles.h5}>
        <span style={styles.span}>01</span>PICK YOUR DESTINATION
      </Heading5>
      <DestinationsWrapper>
        <div>
          {images.map((image, index) => (
            <Astro key={index}>
              {index === selectedAstro && (
                <AnimatePresence>
                  <motion.img
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
        <div style={styles.div}>
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
                  <AnimatePresence>
                    <DestinationsTexts key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <Heading2 key={index}>{destination.name}</Heading2>
                      <BodyText style={styles.bodytext}>{destination.description}</BodyText>
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
        </div>
      </DestinationsWrapper>
    </Content>
  );
};

export default Destination;
