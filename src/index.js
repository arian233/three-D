import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import './index.css';
import Footer from './components/Footer';
import About from './components/About';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Suspense fallback={null}>
      <About />
      <Footer />
    </Suspense>
    <Loader />
  </>
);
