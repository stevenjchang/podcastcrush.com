import React from "react";

const FeatureSection = () => {
  return (
    <div
      id="feature-section"
      className="section-background bg-gray-200 pt-2 opacity-75"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mt-16">Featured Episode</h2>
        <div className="flex justify-center">
          <div className="relative card border m-32 mt-8 p-16 w-full lg:w-2/3 flex">
            <img
              className="self-start"
              src="https://secureimg.stitcher.com/feedimagesplain328/523606.jpg"
              alt=""
            />
            <div className="ml-16">
              <h3 className="mb-4">Flying Coach</h3>
              <p className="mb-8">How a book about tennis changed everything</p>
              <p className="text-sm">
                3 fascinating people discussed how a book about tennis book from
                the 90's changed everything. Steve Kerr remembers reading the
                book twice a year during his playing career. Pete Carroll
                incorporated the book into his coaching, and have given many of
                his players the book. Michael Lewis investigates.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
