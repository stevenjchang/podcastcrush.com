import React from "react";
import HeroSection from "sections/HeroSection.js";
import FeatureSection from "sections/FeatureSection.js";
import PodcastListSection from "sections/PodcastListSection.js";

import "../tailwind.css";

const HomePage = () => {
  return (
    <>
      <div>
        <HeroSection />
        <FeatureSection />
        <PodcastListSection />
      </div>
    </>
  );
};

export default HomePage;
