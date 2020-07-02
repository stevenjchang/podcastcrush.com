import React from "react";

const FeatureSection = () => {
  return (
    <div id="feature-section" className="section-background">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="relative card border m-32 p-16 w-full lg:w-2/3 flex">
            <img
              className="self-start"
              src="https://secureimg.stitcher.com/feedimagesplain328/7668.jpg"
              alt=""
            />
            <div className="ml-16">
              <h3 className="mb-4">title</h3>
              <h4 className="mb-8">EP 4 - Why this is important</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                dolore. Quidem modi beatae ut suscipit magnam exercitationem
                nulla consequuntur dolore. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Harum fuga quos quibusdam.
                <br />
                <br />
                Voluptas magnam ratione eius quaerat fuga libero ex, corrupti
                perferendis blanditiis itaque! Pariatur quidem ullam eius
                obcaecati laudantium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
