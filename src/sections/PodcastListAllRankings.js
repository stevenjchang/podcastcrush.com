import React from "react";

import { podcasts } from "data/podcasts.js";
const categories = [
  {
    name: "sports",
  },
  {
    name: "general",
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
    name: "politics",
  },
  {
    name: "coding",
  },
  {
    name: "fantasy sports",
  },
];

const Category = ({ name }) => {
  return (
    <div className="my-12">
      <h2 className="text-center text-4xl capitalize mb-6 font-semibold text-orange-500 underline">
        {name}
      </h2>
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
      <div className="relative flex flex-col lg:flex-row card-inner lg:border lg:mb-8 lg:my-8 p-8 lg:p-12 w-full lg:w-2/3 ">
        <img
          className="card-image self-center lg:self-start m-2"
          src={imageUrl}
          alt=""
        />
        <div className="lg:pl-12 text-center lg:text-left">
          <h3 className="mb-4 mt-4 lg:mt-0">{name}</h3>
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
