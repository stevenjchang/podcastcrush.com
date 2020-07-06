import React from "react";

const Card = ({ heading, subHeading, description, imageUrl, title, url }) => {
  return (
    <div className="lg:w-1/2 flex flex-col justify-start items-center p-6 lg:p-20">
      <h2 className="text-3xl text-orange-600 font-semibold underline">
        {title}
      </h2>
      <div className="image-container flex justify-start w-full mt-6 lg:mt-12">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="w-32" src={imageUrl} alt="" />
        </a>
        <div className="ml-4 lg:ml-8">
          <h3 className="text-lg">{heading}</h3>
          <p className="text-sm text-gray-900">{subHeading}</p>
        </div>
      </div>

      <div className="mt-4 lg:mt-8 p-4 lg:px-12 lg:py-8 bg-white rounded-lg">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="text-sm">{description}</p>
        </a>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <>
      <div id="feature-section" className="section-background bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <Card {...featuredEpisodeData2} />

            <Card {...featuredEpisodeData} />
          </div>
        </div>
      </div>
      <div id="feature-section" className="section-background bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <Card {...featuredPodcastData} />
            <Card {...featuredEpisodeData3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;

const getImagePath = (fileName) => `/images/podcast_cover_art/${fileName}`;

const featuredEpisodeData = {
  title: "Featured Episode",
  heading: "Flying Coach",
  subHeading: "How a book about tennis changed everything",
  description:
    "3 fascinating people discussed how a book about tennis book from the 90's changed everything. Steve Kerr remembers reading the book twice a year during his playing career. Pete Carroll incorporated the book into his coaching, and have given many of his players the book. Michael Lewis investigates.",
  imageUrl: getImagePath("flying_coach.jpg"),
  url: "https://overcast.fm/+GgG5w-r4A/29:51",
};
const featuredEpisodeData2 = {
  title: "Featured Episode",
  heading: "Bill Simmons",
  subHeading: "DeRay Mckesson on Ending Police Brutality",
  description:
    "DeRay began his endeavor after the events of Ferguson, Missouri in 2014. He explains his initiative Campaign Zero, which is a very focused plan of action, including understanding the cause and effect of local laws in your city, and the impact it has on police brutality. He lays out which local laws could be passed that have shown to have the most impact. This is a truly fascinating episode.",
  imageUrl: getImagePath("bill_simmons.jpg"),
  url: "https://overcast.fm/+b0zmr_h-Y/3:44",
};
const featuredPodcastData = {
  title: "Featured Podcast",
  heading: "Boom/Bust: HQ Trivia",
  subHeading: "The Rise and Fall of HQ Trivia",
  description:
    "An 8-part podcast takes a look the rise and fall of a well known tech startup in Silicon Valley. This is the first time I've encountered host Alyssa Bereznak, and she instantly became one of my favs. Well done podcast overall, well edited and an interest topic. A podcast that I was surprised to hear was over a year in the making",
  imageUrl: getImagePath("boom_bust_hq_trivia.jpg"),
  url: "https://overcast.fm/+bDIjzwti0",
};
const featuredEpisodeData3 = {
  title: "Featured Episode",
  heading: "How I Built This",
  subHeading: "Tate's Bake Shop: Kathleen King",
  description:
    "A story of how Tate's Bake Shop, those cookies you buy at grocery stores, came to be. Twice. This is less so a story of an entrepreneur, but more a story of just a great person",
  imageUrl: getImagePath("how_i_built_this.jpg"),
  url: "https://overcast.fm/+YsrYtuqOc/",
};
