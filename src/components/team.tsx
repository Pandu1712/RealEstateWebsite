import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Ravi Kumar',
    role: 'Project Manager',
    image: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
  },
  {
    name: 'Suma Reddy',
    role: 'Civil Engineer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg',
  },
  {
    name: 'Anil Verma',
    role: 'Site Supervisor',
    image: 'https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=',
  },
  {
    name: 'Neha Joshi',
    role: 'Architect',
    image: 'https://img.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-35933.jpg?semt=ais_hybrid&w=740',
  },
  {
    name: 'Rajesh Babu',
    role: 'Quality Engineer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrJIZW0Wc433NrQrpg6itAaGU_JQN295OPiAIz1XCTuZ4Vnq8cvP_y5DvJQXJnGEupw8&usqp=CAU',
  },
  {
    name: 'Priya Sharma',
    role: 'Safety Officer',
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
  },
];

const OurTeam = () => {
  return (
    <div className="bg-[#FBF5DF] py-14 px-[5vw] text-center">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#1C4D74] text-white text-sm px-3 py-1 rounded-full shadow-md">
                {member.role}
              </div>
              <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-white bg-[#1C4D74] p-2 rounded-full hover:bg-[#163b58]">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-white bg-[#1C4D74] p-2 rounded-full hover:bg-[#163b58]">
                  <FaEnvelope />
                </a>
                <a href="#" className="text-white bg-[#1C4D74] p-2 rounded-full hover:bg-[#163b58]">
                  <FaPhone />
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#1C4D74]">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
