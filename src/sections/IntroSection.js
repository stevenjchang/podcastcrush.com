import React from "react";

const IntroSection = () => {
  return (
    <>
      <div id="intro-section" className="section-background">
        <div className="container mx-auto text-center lg:w-2/5 my-32 p-16 shadow">
          <p className="text-4xl">
            I love listening to a variety of podcasts. Sometimes, I listen to
            something so good that I just want to share it.
          </p>
          <br />
          <p className="text-2xl">
            I've listed out my personal favorites. Coming soon will be featured
            moments and episodes! Stay tuned!
          </p>
          {/* <p>
            Here are some of my favorite moments from the past year of podcasts
            I've heard. Hope you can use it to discover a new podcast that you
            like.
          </p>
          <br />
          <p>
            I've hand-picked not only my favorite podcasts, but also selected a
            few of the best moments or episodes, so you can listen for yourself.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default IntroSection;
