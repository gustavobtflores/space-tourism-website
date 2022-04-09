import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AppBody from "@components/AppBody";
import Container from "@components/Container";
import Header from "./Header";

import backgroundHome from "@/assets/home/background-home-desktop.jpg";
import backgroundDestination from "@/assets/destination/background-destination-desktop.jpg";
import backgroundCrew from "@/assets/crew/background-crew-desktop.jpg";
import backgroundTech from "@/assets/technology/background-technology-desktop.jpg";

import backgroundHomeTablet from "@/assets/home/background-home-tablet.jpg";
import backgroundDestinationTablet from "@/assets/destination/background-destination-tablet.jpg";
import backgroundCrewTablet from "@/assets/crew/background-crew-tablet.jpg";
import backgroundTechTablet from "@/assets/technology/background-technology-tablet.jpg";

import backgroundHomeMobile from "@/assets/home/background-home-mobile.jpg";
import backgroundDestinationMobile from "@/assets/destination/background-destination-mobile.jpg";
import backgroundCrewMobile from "@/assets/crew/background-crew-mobile.jpg";
import backgroundTechMobile from "@/assets/technology/background-technology-mobile.jpg";

const Layout: React.FC = () => {
  const location = useLocation();

  const checkBackground = (size: string) => {
    if (size === "desktop") {
      switch (location.pathname) {
        case "/":
          return backgroundHome;
        case "/destination":
          return backgroundDestination;
        case "/crew":
          return backgroundCrew;
        case "/tech":
          return backgroundTech;
      }
    }

    if (size === "tablet") {
      switch (location.pathname) {
        case "/":
          return backgroundHomeTablet;
        case "/destination":
          return backgroundDestinationTablet;
        case "/crew":
          return backgroundCrewTablet;
        case "/tech":
          return backgroundTechTablet;
      }
    }

    if (size === "mobile") {
      switch (location.pathname) {
        case "/":
          return backgroundHomeMobile;
        case "/destination":
          return backgroundDestinationMobile;
        case "/crew":
          return backgroundCrewMobile;
        case "/tech":
          return backgroundTechMobile;
      }
    }
  };

  return (
    <AppBody>
      <Container backgroundImage={checkBackground("desktop")} backgroundImageTablet={checkBackground("tablet")} backgroundImageMobile={checkBackground("mobile")}>
        <Header />
        <Outlet />
      </Container>
    </AppBody>
  );
};

export default Layout;
