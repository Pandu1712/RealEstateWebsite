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
    <div className="navbar fixed top-0 left-0 z-10 flex justify-between items-center px-[3vw] py-[1vh] bg-[#FBF5DF] h-[10vh] w-full">
      <ul className="flex space-x-[1.5vw] ml-[5vw]">
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

      <div className="flex items-center border border-[#5A5A5A] rounded-full overflow-hidden w-[25vw] mr-[5vw]">
        <input
          type="text"
          placeholder="Search by Keyword"
          className="px-[1vw] py-[0.5vh] outline-none w-full"
        />
        <button className="bg-[#1C4D74] text-white px-[1vw] py-[0.5vh] hover:bg-[#1C4D74] rounded-r-full">
          🔍
        </button>
      </div>
    </div>
  );
};

export default Header;
