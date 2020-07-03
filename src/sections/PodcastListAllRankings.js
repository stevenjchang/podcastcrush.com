import React from "react";

const data = [1, 2, 3, 4];

const Category = () => {
  return (
    <div className="c">
      <h2 className="c">Category</h2>
      <ol>
        {data.map((podcast, idx) => (
          <li className="" key={idx}>
            <Card />
          </li>
        ))}
      </ol>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="relative card-inner border my-8 p-16 w-full lg:w-2/3 flex">
        <img
          className="card-image self-start m-2"
          src="https://secureimg.stitcher.com/feedimagesplain328/7668.jpg"
          alt=""
        />
        <div className="ml-16">
          <h3 className="">Planet Money</h3>
          <h4 className="mb-8">Episode: Why this is important</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            dolore. Quidem modi beatae ut suscipit magnam exercitationem nulla
            consequuntur dolore. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Harum fuga quos quibusdam.
            <br />
            <br />
            Voluptas magnam ratione eius quaerat fuga libero ex, corrupti
            perferendis blanditiis itaque! Pariatur quidem ullam eius obcaecati
            laudantium?
          </p>
        </div>
      </div>
    </div>
  );
};

const PodcastListAllRankings = () => {
  return (
    <div id="all_rankings-section" className="section-background">
      <div className="container mx-auto">
        <Category />
      </div>
    </div>
  );
};

export default PodcastListAllRankings;
