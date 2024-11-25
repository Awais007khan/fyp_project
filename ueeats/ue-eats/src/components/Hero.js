import React from "react";
import image from './unknown.jpg'
const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen flex items-center justify-center"
    //   style={{ backgroundImage: "url('./')" }}
    style={{ backgroundImage: `url(${image})`}}
    >
      <div className="bg-black bg-opacity-80 p-10 rounded-lg text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to UNI EATS
        </h1>
        <p className="text-2xl text-gray-200 mb-5">
         Here are the our avalible items
        </p>
        <a
          href="#contact"
          className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
