import React from 'react'

const page = () => {
    return (
        <>
            

            <div className="bg-[#061F3E] w-full h-[100px]  flex items-center justify-center mt-[10vh]">
                <h3 className="text-6xl text-white font-bold">WE ARE HIRING</h3>
            </div>


            <div className="relative z-10 flex items-center justify-between h-[70vh] px-[5vw] bg-white">
                {/* Left Side Image */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src="Group 123.png"
                        alt="Left Side"
                        className="w-[500px] h-[500px] object-cover rounded-xl shadow-xl mr-60"
                    />
                </div>

                {/* Right Side Text */}
                <div className="w-1/2 ">
                    <h2 className="font-semibold text-[6vh] mb-[2vh] text-red-600">"Ready to make your<br />
                        mark in construction?<br />
                        <span className='text-black'>Apply today</span> and<br />
                        let’s build together!"</h2>


                </div>
            </div>


            <div className="bg-[#061F3E] w-full h-[100px] mt-10 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">OPENING POSITION</h3>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 bg-[#F5F5F5]">

                {/* Card 1 */}
                <div className=" p-6 rounded-lg shadow-md text-center">
                    <img src="image 43.png" alt="Job 1" className="w-70 h-50 mx-auto mb-4 underline underline-offset-2" />
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Position</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Quality Engineer</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">0 - 2 Year’s</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Visakhapatnam</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src="image 44.png" alt="Job 2" className="w-70 h-50 mx-auto mb-4" />
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Position</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Site Engineer</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">2 - 4 Year’s</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Hyderabad</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src="image 45.png" alt="Job 3" className="w-70 h-50 mx-auto mb-4" />
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Position</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Project Manager</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">5+ Year’s</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Bangalore</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img src="image 46.png" alt="Job 4" className="w-70 h-50 mx-auto mb-4" />
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Position</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Architect</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">3 - 5 Year’s</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <div className="w-16 h-[2px] bg-[#1C4D74] mx-auto mb-1"></div>
                        <p className="text-gray-700">Chennai</p>
                    </div>
                </div>

            </div>

            <div className="bg-[#061F3E] w-full h-[100px] mt-10 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">APPLY FO THE POSITION</h3>
            </div>
            <div className=" p-6 bg-white w-fu mb-7">
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
                    <textarea placeholder="Address" className="border border-gray-400 p-2 rounded h-[100px] col-span-2"></textarea>
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
                        <div className="flex items-center gap-2">
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