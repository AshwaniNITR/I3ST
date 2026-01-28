import React from 'react';
import Contact from "../components/contact";
import Hero from '../components/hero';
import AboutUs from "../components/AboutUs";
import Topics from "../components/Topics";
import ImportantDatesSlider from '../components/ImportantDates';
import SpeakersCarousel from '../components/SpeakersCarousel';

export default function Page() {
    return <div>
      <Hero/>
      <ImportantDatesSlider />
     
      <SpeakersCarousel/>
      <h1 className="text-3xl font-bold underline"></h1>
      <AboutUs />
      <Topics />
      
      {/* <Contact/> */}
    </div>
  }
