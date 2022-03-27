import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";

import AppBody from "@/components/AppBody";
import Container from "@/components/Container";
import Header from "@/layouts/Header";

import background from "@/assets/home/background-home-desktop.jpg";
import Destination from "@pages/Destination";

function App() {
  return (
    <Router>
      <AppBody>
        <Container backgroundImage={background}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
          </Routes>
        </Container>
      </AppBody>
    </Router>
  );
}

export default App;
