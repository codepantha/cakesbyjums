import React from 'react';
import { Contact, CTA, Footer, Header, MidSection, NavBar, OurHistory, Slider } from './components';
import './index.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Slider />
      <MidSection />
      <OurHistory />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App