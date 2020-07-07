import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        id="hero-section"
        className="section-background bg-orange-600 py-8 lg:py-24"
      >
        <div className="container mx-auto flex">
          <div className="left w-full lg:w-1/2  px-12">
            <div className="c flex justify-center items-center">
              <img className="h-auto" src="/images/podcast_steve.svg" alt="" />
            </div>
          </div>
          <div className="right lg:w-1/2 p-6 lg:p-16">
            <div className="c text-center">
              <h1 className="text-white text-xl lg:text-6xl">
                PodcastCrush.com
              </h1>
              <h3 className="text-white text-xl lg:mt-4">
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
