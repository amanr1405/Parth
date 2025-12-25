import React from 'react'
import Heroic from '../src/sections/Heroic'
import Info from '../src/sections/Info'
import Des from '../src/sections/Des'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"
import Work from '../src/sections/Work'
import Footer from '../src/components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,     
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <Heroic />
      <Info />
      <Des />
      <Work />
      <Footer />
    </div>
  )
}

export default App