import React from "react";
import image from './juices.jpeg'; // Import the image related to Burgerr

const Team = () => {
  const members = [
    {
      name: "Juices", 
      role: "The delicious Mango juice here available", 
      img: image, 
      intro: "This is an awesome product",
      description: (
        <div>
          <p className="font-bold text-2xl text-gray-800 mt-4 mb-2">The fowlling company Juices are avalible:</p>
          <div className="text-gray-900 text-xl space-y-4 text center">
            <p>Slice Mango</p>
            <p>Nestle(mango,apple,guava</p>
           <p>Real Fruit</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        {/* Main Title */}
        <h2 className="text-6xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
          Available Item: <span className="text-orange-600">Mango juice</span>
        </h2>

        {/* Member Card */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Member Image */}
              <img
                className="w-56 h-56 rounded-full mx-auto mb-6 object-cover border-4 border-gray-200 shadow-lg"
                src={member.img}
                alt={member.name}
                onError={(e) => e.target.src = 'fallback-image.jpg'} // Fallback image
              />
              
              {/* Member Name & Role */}
              <h3 className="text-4xl font-bold mb-2 text-gray-800">{member.name}</h3>
              <p className="text-gray-600 mb-4 text-xl">{member.role}</p>
              
              {/* Intro Text */}
              <p className="text-gray-700 text-lg mb-4">{member.intro}</p>
              
              {/* Burger Ingredients List */}
              <div className="text-gray-700 text-lg mb-4">
                {member.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
