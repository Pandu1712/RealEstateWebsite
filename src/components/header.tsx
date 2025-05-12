'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service', path: '/contact' },
    { name: 'Career', path: '/career' }
  ];

  return (
    <div className="navbar fixed top-0 left-0 z-10 flex flex-wrap justify-between items-center px-4 py-4 bg-[#FBF5DF] w-full">
      <ul className="flex flex-wrap space-x-4 md:space-x-[1.5vw] ml-4 md:ml-[5vw] w-full md:w-auto justify-center md:justify-start">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              className={`text-gray-700 font-semibold pb-1 ${
                pathname === item.path ? 'border-b-4 border-[#1C4D74]' : ''
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center border border-[#5A5A5A] rounded-full overflow-hidden w-full md:w-[25vw] mt-4 md:mt-0 mr-4 md:mr-[5vw]">
        <input
          type="text"
          placeholder="Search by Keyword"
          className="px-4 py-2 outline-none w-full"
        />
        <button className="bg-[#1C4D74] text-white px-4 py-2 hover:bg-[#1C4D74] rounded-r-full">
          🔍
        </button>
      </div>
    </div>
  );
};

export default Header;
