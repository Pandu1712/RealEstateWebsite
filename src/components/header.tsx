'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service', path: '/service' },
    { name: 'Career', path: '/career' }
  ];

  return (
    <div className="navbar fixed top-0 left-0 z-10 flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-4 bg-[#FBF5DF] w-full gap-4 md:gap-0">
      
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center md:justify-start w-full md:w-auto space-x-4 md:space-x-[1.5vw] ml-0 md:ml-[5vw]">
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

      {/* Search Bar */}
     <div className="flex items-center border border-[#5A5A5A] w-full md:w-[25vw] overflow-hidden rounded-full">
  <input
    type="text"
    placeholder="Search by Keyword"
    className="px-4 py-2 outline-none w-full rounded-l-lg"
  />
  <button className="bg-[#1C4D74] text-white px-4 py-2 hover:bg-[#163b59] rounded-r-lg">
    🔍
  </button>
</div>

    </div>
  );
};

export default Header;
