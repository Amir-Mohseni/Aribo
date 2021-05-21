import React from 'react';
import './App.css';

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import TakeALook from './components/TakeALook'
import AwesomeFeatures from './components/AwesomeFeatures'
import WorkArea from './components/WorkArea'
import NewsletterArea from './components/NewsletterArea'
// import ScreenshotArea from './components/ScreenshotArea'
import PricingArea from './components/PricingArea'
import CustomPlan from './components/CustomPlan'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import DownloadArea from './components/DownloadArea'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      
      <Header />

      <Hero />

      <Features />

      <About />

      <TakeALook />

      <AwesomeFeatures />

      <WorkArea />

      <NewsletterArea />

      {/* <ScreenshotArea /> */}

      <PricingArea />

      <CustomPlan />

      <Team />

      <Testimonial />

      <DownloadArea />

      <FAQ />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
