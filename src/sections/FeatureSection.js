import React from "react";

const Card = ({ heading, subHeading, description, imageUrl, title }) => {
  return (
    <div className="lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-20">
      <h2 className="text-3xl text-orange-600">{title}</h2>
      <div className="image-container flex justify-start w-full mt-6 lg:mt-12">
        <img className="w-32" src={imageUrl} alt="" />
        <div className="ml-4 lg:ml-8">
          <h3 className="text-lg">{heading}</h3>
          <p className="text-sm text-gray-900">{subHeading}</p>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 p-4 lg:px-12 lg:py-8 bg-white rounded-lg">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div id="feature-section" className="section-background bg-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <Card {...featuredPodcastData} />
          <Card {...featuredEpisodeData} />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

const featuredPodcastData = {
  title: "Featured Podcast",
  heading: "Boom/Bust: HQ Trivia",
  subHeading: "The Rise and Fall of HQ Trivia",
  description:
    "An 8-part podcast takes a look the rise and fall of a well known tech startup in Silicon Valley. This is the first time I've encountered host Alyssa Bereznak, and she instantly became one of my favs. Well done podcast overall, well edited and an interest topic. A podcast that I was surprised to hear was 2 years in the making",
  imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/533084.jpg",
  url: "",
};
const featuredEpisodeData = {
  title: "Featured Episode",
  heading: "Flying Coach",
  subHeading: "How a book about tennis changed everything",
  description:
    "3 fascinating people discussed how a book about tennis book from the 90's changed everything. Steve Kerr remembers reading the book twice a year during his playing career. Pete Carroll incorporated the book into his coaching, and have given many of his players the book. Michael Lewis investigates.",
  imageUrl: "https://secureimg.stitcher.com/feedimagesplain328/523606.jpg",
  url: "",
};
