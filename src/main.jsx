import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import { Loader } from "@react-three/drei";
import "./index.css";

const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Suspense>
    <Loader />
  </>
);
