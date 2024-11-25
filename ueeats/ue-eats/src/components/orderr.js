import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import image from './secondbackground.jpeg';
import image1 from './lays.jpg';
import image2 from './tea.jpg';
import image3 from './baryani.jpeg';
import image4 from './mango.jpeg';
import image5 from './samoa.jpeg';
import image6 from './mutton nahari.jpeg';
import image7 from './cold drinks.jpeg';
import image8 from './shawarma.jpeg';
import image9 from './juices.jpeg';
import image10 from './stick fries.jpeg';
import image11 from './Simple burger.jpeg';

const Team = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const members = [
    { name: "Burger", role: "The delicious burger here avalible", img: `${image}`, intro: "Its taste awesome" },
    { name: "Lays", role: "The delicious fries are avalible here", img: `${image1}`, intro: "Its taste awesome" },
    { name: "Tea", role: "The delicious tea is avalible", img: `${image2}`, intro: "Its taste awesome" },
    { name: "Baryani", role: "The delicious baryani avalible here", img: `${image3}`, intro: "Its taste awesome" },
    { name: "Mango juice", role: "The delicious mango juice is avalible here", img: `${image4}`, intro: "Its taste awesome" },
    { name: "Cold Drinks", role: "Cold Drinks are avalible here", img: `${image7}`, intro: "Its awesome" },
    { name: "Samosa", role: "The delicious samosa avalible here", img: `${image5}`, intro: "Its taste awesome" },
    { name: "Mutton Nahari", role: "THe delicious Mutton nahari avalible here", img: `${image6}`, intro: "Its taste awesome" },
    { name: "Shawarma", role: "The delicious shawarma is avalible here", img: `${image8}`, intro: "Its taste awesome" },
    { name: "Juices", role: "The quality juices are avalible here", img: `${image9}`, intro: "Its absolutely awesome" },
    { name: "Sticky Fries", role: "The delicious fries are avalible here", img: `${image10}`, intro: "Its absolutely awesome" },
    { name: "Simple Burger", role: "The delicious simple burgers are avalible", img: `${image11}`, intro: "Its taste awesome" }
  ];

  // Function to navigate to the Contact page (order page)
  const handleOrderClick = () => {
    navigate('/Contactt');
  };

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Avalible Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src={member.img}
                alt={member.name}
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4">{member.intro}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={handleOrderClick} // Click handler for order
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
