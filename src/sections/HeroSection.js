import React from "react";

const HeroSection = () => {
  return (
    <>
      <div id="hero-section" className="section-background bg-orange-600 py-24">
        <div className="container mx-auto flex">
          <div className="left w-1/2">
            <div className="c flex justify-center items-center">
              <img className="h-auto" src="/images/icon_podcast.svg" alt="" />
            </div>
          </div>
          <div className="right w-1/2 p-16">
            <div className="c text-center">
              <h1 className="text-white text-6xl">PodcastCrush.com</h1>
              <h3 className="text-white text-xl mt-4">
                Find the podcast you'll love
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
