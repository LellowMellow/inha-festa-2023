import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import FestaInfo from "../pages/FestaInfo/FestaInfo";
import { Fireworks } from "@fireworks-js/react";
import { AnimatePresence } from "framer-motion";
import BoothInfo from "../pages/BoothInfo/BoothInfo";

const Router = () => (
  <BrowserRouter>
    <Fireworks
      options={{
        hue: {
          min: 0,
          max: 345,
        },
        acceleration: 1.0,
        brightness: {
          min: 50,
          max: 80,
        },
        decay: {
          min: 0.01,
          max: 0.03,
        },
        delay: {
          min: 50.0,
          max: 60.0,
        },
        explosion: 5,
        flickering: 0,
        intensity: 15,
        friction: 0.95,
        gravity: 2,
        opacity: 1,
        particles: 45,
        traceLength: 1.0,
        traceSpeed: 10,
        rocketsPoint: {
          min: 0,
          max: 100,
        },
        lineWidth: {
          explosion: {
            min: 0.0,
            max: 0.0,
          },
          trace: {
            min: 0.0,
            max: 1.5,
          },
        },
      }}
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        background: "#000",
        zIndex: "0",
      }}
    />
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/festa-info" element={<FestaInfo />} />
        <Route path="/booth-info" element={<BoothInfo />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

export default Router;
