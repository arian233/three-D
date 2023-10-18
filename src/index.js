import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import './index.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Suspense fallback={null}> */}
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    {/* </Suspense>
    <Loader /> */}
  </>
);
