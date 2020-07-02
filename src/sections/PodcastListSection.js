import React from "react";

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
          {data.map((podcast, idx) => (
            <Card key={idx} {...podcast} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PodcastListSection;

const data = [
  {
    name: "The Bill Simmons Podcast",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/76706.jpg",
    categories: ["sports"],
  },
  {
    name: "Mina Kimes Show",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/142658.jpg",
    categories: ["sports"],
  },
  {
    name: "The Press Box",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/77766.jpg",
    categories: ["tech"],
  },
  {
    name: "Pivot",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/81305.jpg",
    categories: ["tech"],
  },
  {
    name: "Against the Rules with Michael Lewis",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/382761.jpg",
    categories: [],
  },
  {
    name: "Planet Money",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/7668.jpg",
    categories: ["tech"],
  },
  {
    name: "Ringer NFL",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/89019.jpg",
    categories: ["tech"],
  },
  {
    name: "The Stack Overflow Podcast",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/18725.jpg",
    categories: ["tech"],
  },
  {
    name: "Software Engineering Unlocked",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/476498.jpg",
    categories: ["tech"],
  },
  {
    name: "The Weeds",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/73953.jpg",
    categories: ["politics"],
  },
  {
    name: "How I Built This",
    description: "desc",
    imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/98794.jpg",
    categories: [],
  },
];
