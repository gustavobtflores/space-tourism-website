import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

import Home from "./Home";
import Destination from "./Destination";

import AppBody from "@/components/AppBody";
import Container from "@/components/Container";
import Header from "@/layouts/Header";

import backgroundHome from "@/assets/home/background-home-desktop.jpg";
import backgroundDestination from "@/assets/destination/background-destination-desktop.jpg";
import backgroundCrew from "@/assets/crew/background-crew-desktop.jpg";
import backgroundTech from "@/assets/technology/background-technology-desktop.jpg";
import Crew from "./Crew";
import Technology from "./Technology";

const View = () => {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Technology />} />
        </Routes>
      </Container>
    </AppBody>
  );
};

export default View;
