import React from "react";

import { podcasts } from "data/podcasts.js";
const categories = [
  {
    name: "sports",
  },
  {
    name: "tech",
  },
  {
    name: "economics", // money?
  },
  {
    name: "entertainment",
  },
  {
    name: "coding",
  },
  {
    name: "politics",
  },
  {
    name: "general",
  },
  {
    name: "fantasy sports",
  },
];

const Category = ({ name }) => {
  return (
    <div className="mb-32">
      <h2 className="text-center text-4xl capitalize">{name}</h2>
      <ol>
        {podcasts
          .filter((podcast, idx) => podcast.categories.includes(name))
          .map((podcast, idx) => (
            <li className="" key={idx}>
              <Card {...podcast} />
            </li>
          ))}
      </ol>
    </div>
  );
};

const Card = ({ name, description, imageUrl }) => {
  return (
    <div className="flex justify-center">
      <div className="relative card-inner border my-8 p-12 w-full lg:w-2/3 flex">
        <img className="card-image self-start m-2" src={imageUrl} alt="" />
        <div className="ml-12">
          <h3 className="mb-4">{name}</h3>
          {/* <h4 className="mb-8">Episode: Why this is important</h4> */}
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const PodcastListAllRankings = () => {
  return (
    <div id="all_rankings-section" className="section-background">
      <div className="container mx-auto">
        {categories.map((category, idx) => (
          <Category key={idx} {...category} />
        ))}
      </div>
    </div>
  );
};

export default PodcastListAllRankings;
