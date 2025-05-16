import React from 'react';
import Client from '../components/client';

const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full mt-[10vh]">
                <img src="image 5.jpg" alt="Hero" className="w-full h-[850px] object-cover" />
                <div className="absolute top-[100px] left-0 w-full text-center bg-opacity-40 backdrop-blur-lg p-4">
                    <h2 className="text-white text-3xl font-bold">
                        "Where your dream home becomes<br />our blueprint for success."
                    </h2>
                </div>
            </div>

            {/* Services Header */}
            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">OUR SERVICES</h3>
</div>


            {/* Services Section 1 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-white py-10 px-4'>
                {[
                    { title: 'Building Construction', image: 'image 6.jpg' },
                    { title: 'Gated Communities', image: 'image 7.jpg' },
                    { title: 'Apartment Development', image: 'image 8.png' },
                ].map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[350px] w-[350px]">
                            <img src={service.image} alt={service.title} className="w-[350px] h-[200px] rounded-t-2xl" />
                            <h3 className="text-xl font-bold bg-[#DEF1FF] w-full text-center py-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-xl text-center mt-4">
                                "From vision to reality,<br />we construct your dreams."
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                                View More
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Services Section 2 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-white py-10 px-4'>
                {[
                    { title: 'Factory Construction', image: 'image 9.png' },
                    { title: 'Renovation', image: 'image 10.png' },
                    { title: 'Map Projects', image: 'image 11.png' },
                ].map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[350px] w-[350px]">
                            <img src={service.image} alt={service.title} className="w-[350px] h-[200px] rounded-t-2xl" />
                            <h3 className="text-xl font-bold bg-[#DEF1FF] w-full text-center py-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-xl text-center mt-4">
                                "From vision to reality,<br />we construct your dreams."
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                                View More
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Success Growth */}
            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">SUCCESS GROWTH</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-white py-10 px-4">
                {[
                    { icon: 'cal.png', label: '20+\nPROJECTS' },
                    { icon: 'Vector.png', label: '100+\nGROWTH RATIO' },
                    { icon: 'client.png', label: '200+\nHAPPY CLIENTS' },
                    { icon: 'call.png', label: 'ON TIME\nDELIVERY' },
                    { icon: 'Group.png', label: 'HIGH\nQUALITY' },
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3490DA] to-[#1C4D74] text-white rounded-full w-[250px] h-[250px] mx-auto">
                        <img src={item.icon} alt="Icon" className="w-16 h-16 mb-2" />
                        <p className="text-center text-2xl font-semibold whitespace-pre-line">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Expertise Projects */}
            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">EXPERTISE PROJECTS</h3>
            </div>

            {/* Get a Quote */}
            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">GET A QUOTE</h3>
            </div>

            <div className='mt-10 px-4'>
                <h1 className="font-light text-4xl text-center">
                    "We are expert in this field<br />since almost 10 years."
                </h1>
            </div>

            <div className="mt-10 px-4">
                {/* Placeholder for quote form or additional content */}
                <Client />
            </div>
        </>
    );
};

export default HomePage;