import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "@layouts/Layout";

import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import { AnimatePresence } from "framer-motion";

const View = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="tech" element={<Technology />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default View;
