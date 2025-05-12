import React from 'react';
import Team from "./../../components/team";

const page = () => {
  return (
    <>
      {/* Top Header */}
      <div className="bg-[#061F3E] w-full h-[10vh] flex items-center justify-center mt-[10vh]">
        <h3 className="text-[5vh] text-white font-bold">About Us</h3>
      </div>

      {/* Intro Section */}
      <div className="relative w-full h-auto md:h-[100vh]">
        <img
          src="image 24.png"
          alt="Example"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
        />

        <div className="absolute top-[5vh] md:top-[12vh] left-0 w-full text-center px-[5vw]">
          <h2 className="text-[#2C4D60] font-semibold text-[4vh] md:text-[6vh] mb-[1vh]">
            Building Excellence For Over a Decade
          </h2>
          <p className="text-[#2C4D60] text-[2.2vh] md:text-[2.5vh] max-w-[90vw] mx-auto leading-relaxed font-bold">
            We are more than just a construction company — we are builders of dreams, architects of innovation,
            and creators of lasting impressions. With a rich legacy spanning over 10 years, we have established
            ourselves as a trusted name in the construction industry.
          </p>
          <p className="text-[#2C4D60] text-[2.2vh] md:text-[2.5vh] max-w-[90vw] mx-auto leading-relaxed font-bold mt-2">
            We are more than just a construction company — we are builders of dreams, architects of innovation,
            and creators of lasting impressions. With a rich legacy spanning over 10 years, we have established
            ourselves as a trusted name in the construction industry.
          </p>

          <div className="mt-[5vh] md:mt-[25vh]">
            <button className="bg-[#1C4D74] text-white px-6 py-2 mt-4 md:ml-[70vw] hover:bg-[#163c5b] rounded-lg">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Our Promise Header */}
      <div className="bg-[#061F3E] w-full h-[10vh] mt-[10vh] md:mt-[-25vh] flex items-center justify-center">
        <h3 className="text-[4vh] md:text-[5vh] text-white font-bold">OUR PROMISE</h3>
      </div>

      {/* Promise Section */}
      <div className="relative w-full min-h-[120vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="image 29.png" alt="" className="w-full h-full object-cover blur-sm" />
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 md:px-[5vw] py-10">
          {/* Card 1 */}
          <div className="bg-white w-[90vw] sm:w-[45vw] lg:w-[20vw] rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
            <img src="image 6.jpg" alt="Card 1" className="w-full h-[200px] object-cover" />
            <h3 className="text-xl font-bold bg-[#DEF1FF] w-full text-center py-2">Building Construction</h3>
            <p className="text-gray-700 text-center px-4 mt-2 text-sm">
              "From vision to reality,<br /> we construct your dreams."
            </p>
            <a href="/contact" className="bg-[#1C4D74] text-white px-4 py-2 my-4 rounded-2xl hover:bg-[#163c5b]">
              View More
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-[90vw] sm:w-[45vw] lg:w-[20vw] rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
            <img src="image 6.jpg" alt="Card 2" className="w-full h-[200px] object-cover" />
            <h3 className="text-xl font-bold bg-[#DEF1FF] w-full text-center py-2">Interior Design</h3>
            <p className="text-gray-700 text-center px-4 mt-2 text-sm">
              "Crafting comfort ,<br /> inside every space."
            </p>
            <a href="/contact" className="bg-[#1C4D74] text-white px-4 py-2 my-4 rounded-2xl hover:bg-[#163c5b]">
              View More
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white w-[90vw] sm:w-[45vw] lg:w-[20vw] rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
            <img src="image 6.jpg" alt="Card 3" className="w-full h-[200px] object-cover" />
            <h3 className="text-xl font-bold bg-[#DEF1FF] w-full text-center py-2">Architecture</h3>
            <p className="text-gray-700 text-center px-4 mt-2 text-sm">
              "Designing structures<br /> that inspire and endure."
            </p>
            <a href="/contact" className="bg-[#1C4D74] text-white px-4 py-2 my-4 rounded-2xl hover:bg-[#163c5b]">
              View More
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white w-[90vw] sm:w-[45vw] lg:w-[20vw] rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
            <img src="image 6.jpg" alt="Card 4" className="w-full h-[200px] object-cover" />
            <h3 className="text-xl font-bold bg-[#DEF1FF] w-full text-center py-2">Architecturesss</h3>
            <p className="text-gray-700 text-center px-4 mt-2 text-sm">
              "Designing structures<br /> that inspire and endure."
            </p>
            <a href="/contact" className="bg-[#1C4D74] text-white px-4 py-2 my-4 rounded-2xl hover:bg-[#163c5b]">
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Our Team Header */}
      <div className="bg-[#061F3E] w-full h-[10vh] mt-[5vh] flex items-center justify-center">
        <h3 className="text-[4vh] md:text-[5vh] text-white font-bold">OUR TEAM</h3>
      </div>

      {/* Team Component */}
      <Team />
    </>
  );
};

export default page;
