import React from "react";
import HeroSection from "sections/HeroSection.js";
import IntroSection from "sections/IntroSection.js";
import FeatureSection from "sections/FeatureSection.js";
// import PodcastListSection from "sections/PodcastListSection.js";
import PodcastListAllRankings from "sections/PodcastListAllRankings.js";

import "../tailwind.css";

const HomePage = () => {
  return (
    <>
      <div>
        <HeroSection />
        <IntroSection />
        <FeatureSection />
        <PodcastListAllRankings />
        {/* <PodcastListSection /> */}
      </div>
    </>
  );
};

export default HomePage;
