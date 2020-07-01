import React from "react";
import HeroSection from "sections/HeroSection.js";
import PodcastListSection from "sections/PodcastListSection.js";

import "../styles/tailwind.css";

const HomePage = () => {
  return (
    <>
      <div>
        <HeroSection />
        <PodcastListSection />
      </div>
    </>
  );
};

export default HomePage;
