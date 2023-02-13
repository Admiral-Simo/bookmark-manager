import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="px-3 py-10 flex flex-col md:flex-row container mx-auto">
        <div className="flex-1 order-2 md:order-1 space-y-6 flex flex-col mt-10 md:mt-0">
          <h1 className="capitalize text-3xl md:text-6xl text-center md:text-left font-semibold">
            a simple bookmark manager
          </h1>
          <p className="text-2xl text-center md:text-left text-gray-400">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="space-x-3 self-center md:self-start">
            <button className="p-4 border-2 border-softBlue bg-softBlue text-white rounded-md font-semibold hover:bg-white hover:text-softBlue transition-colors duration-300">Get It On Chrome</button>
            <button className="p-4 border-2 border-gray-300 text-black bg-gray-300 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300">Get It On Firefox</button>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex flex-col justify-center items-center flex-1">
          <img src={require("../../images/illustration-hero.png")} alt="" />
          <div className="bg-hero"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
