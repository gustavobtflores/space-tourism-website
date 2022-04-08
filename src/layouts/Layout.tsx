import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AppBody from "@components/AppBody";
import Container from "@components/Container";
import Header from "./Header";

import backgroundHome from "@/assets/home/background-home-desktop.jpg";
import backgroundDestination from "@/assets/destination/background-destination-desktop.jpg";
import backgroundCrew from "@/assets/crew/background-crew-desktop.jpg";
import backgroundTech from "@/assets/technology/background-technology-desktop.jpg";

const Layout: React.FC = () => {
  const location = useLocation();

  const checkBackground = () => {
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
  };

  return (
    <AppBody>
      <Container backgroundImage={checkBackground()}>
        <Header />
        <Outlet />
      </Container>
    </AppBody>
  );
};

export default Layout;
