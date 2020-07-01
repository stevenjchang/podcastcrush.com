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
              <h3 className="text-white text-xl">Find the Podcast you love</h3>
              <br />
              <p className="">
                I love listening to a variety of podcasts. Sometimes, I listen
                to something so good that I just want to share it.
              </p>
              <br />
              <p>
                Here are some of my favorite moments from the past year of
                podcasts I've heard. Hope you can use it to discover a new
                podcast that you like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
