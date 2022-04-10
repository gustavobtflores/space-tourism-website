import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

import Layout from "@layouts/Layout";

import Home from "./Home";
const Destination = lazy(() => import("./Destination"));
const Crew = lazy(() => import("./Crew"));
const Technology = lazy(() => import("./Technology"));

const View = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="tech" element={<Technology />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default View;
