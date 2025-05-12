import React from 'react'

const page = () => {
    return (
        <>
            <div className="bg-[#061F3E] w-full h-[100px] flex items-center justify-center mt-[10vh]">
                <h3 className="text-4xl md:text-6xl text-white font-bold text-center">WE ARE HIRING</h3>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between lg:h-[70vh] px-[5vw] bg-white py-10">
                {/* Left Side Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
                    <img
                        src="Group 123.png"
                        alt="Left Side"
                        className="w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-xl"
                    />
                </div>

                {/* Right Side Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="font-semibold text-2xl md:text-4xl lg:text-[6vh] text-red-600 leading-tight">
                        "Ready to make your<br />
                        mark in construction?<br />
                        <span className='text-black'>Apply today</span> and<br />
                        let’s build together!"
                    </h2>
                </div>
            </div>

            <div className="bg-[#061F3E] w-full h-[100px] mt-10 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center">OPENING POSITION</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 bg-[#F5F5F5]">
                {/* Repeated Job Cards */}
                {[{
                    img: "image 43.png", position: "Quality Engineer", experience: "0 - 2 Year’s", location: "Visakhapatnam"
                }, {
                    img: "image 44.png", position: "Site Engineer", experience: "2 - 4 Year’s", location: "Hyderabad"
                }, {
                    img: "image 45.png", position: "Project Manager", experience: "5+ Year’s", location: "Bangalore"
                }, {
                    img: "image 46.png", position: "Architect", experience: "3 - 5 Year’s", location: "Chennai"
                }].map((job, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={job.img} alt={`Job ${idx + 1}`} className="w-70 h-50 mx-auto mb-4" />
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold">Position</h3>
                            <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                            <p className="text-gray-700">{job.position}</p>
                        </div>
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold">Experience</h3>
                            <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                            <p className="text-gray-700">{job.experience}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Location</h3>
                            <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                            <p className="text-gray-700">{job.location}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#061F3E] w-full h-[100px] mt-10 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center">APPLY FOR THE POSITION</h3>
            </div>

            <div className="p-6 bg-white w-full mb-7">
                <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                    <input type="text" placeholder="First Name" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Middle Name" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Last Name" className="border border-gray-400 p-2 rounded" />
                    <input type="date" placeholder="D.O.B." className="border border-gray-400 p-2 rounded" />
                    <select className="border border-gray-400 p-2 rounded">
                        <option value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <input type="tel" placeholder="Contact No" className="border border-gray-400 p-2 rounded" />
                    <input type="email" placeholder="Email" className="border border-gray-400 p-2 rounded" />
                    <textarea placeholder="Address" className="border border-gray-400 p-2 rounded h-[100px] md:col-span-2"></textarea>
                </form>

                <h2 className="text-2xl font-bold mt-8 mb-4 max-w-7xl mx-auto">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                    <input type="text" placeholder="Qualification" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Year of Passout" className="border border-gray-400 p-2 rounded" />
                    <input type="text" placeholder="Stream" className="border border-gray-400 p-2 rounded" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Apply For</h2>
                        <select className="border border-gray-400 p-2 rounded w-full">
                            <option>Positions</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="text-xl font-bold mb-2">Resume</h2>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                            <button type="button" className="bg-gray-300 px-4 py-2 font-bold text-white rounded">
                                UPLOAD
                            </button>
                            <input type="file" className="border border-gray-400 p-2 rounded w-full" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-2 rounded">
                        SUBMIT
                    </button>
                </div>
            </div>
        </>
    )
}

export default page
