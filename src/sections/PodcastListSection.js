import React from "react";

import { podcasts } from "data/podcasts.js";

const Card = ({ name, description, imageUrl, categories }) => {
  return (
    <div className="w-1/3 flex flex-col justify-center items-center py-12">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageUrl} alt="" />
          </div>
          <div className="flip-card-back">
            <h3 className="my-6 text-lg">{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PodcastListSection = () => {
  return (
    <>
      <div id="podcast_list-section" className="section-background">
        <br />
        <br />
        <div className="container mx-auto flex flex-wrap">
          {podcasts.map((podcast, idx) => (
            <Card key={idx} {...podcast} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PodcastListSection;
