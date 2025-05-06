import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className="navbar flex justify-between items-center px-6 py-4 bg-[#FBF5DF] h-[81px] w-full ">

                <ul className="flex space-x-6 ml-20">
                    <li><a href="/" className="text-gray-700 font-semibold">Home</a></li>
                    <li><a href="/about" className="text-gray-700 font-semibold">About</a></li>
                    <li><a href="/services" className="text-gray-700 font-semibold">Projects</a></li>
                    <li><a href="/contact" className="text-gray-700 font-semibold">Service</a></li>
                    <li><a href="/contact" className="text-gray-700 font-semibold">Career</a></li>
                </ul>

                <div className="flex items-center border border-[#5A5A5A] rounded-md overflow-hidden w-[350px] mr-20 rounded-r-full rounded-l-full">
                    <input
                        type="text"
                        placeholder="Search by Keyword"
                        className="px-3 py-1 outline-none"
                    />
                    <button className="bg-[#1C4D74] text-white px-3 py-1 hover:bg-[#1C4D74] ml-21 rounded-r-full">
                        🔍
                    </button>
                </div>

            </div>
            <div className="relative w-full h-100px]">
                <img src="image 5.jpg" alt="Example" className="w-full h-[850px] object-cover" />

                <div className="absolute top-[100px] left-0 w-full text-center bg-blur bg-opacity-40 backdrop-blur-lg p-4">
                    <h2 className="text-white text-3xl font-bold">
                        "Where your dream home becomes<br />
                        our blueprint for success."
                    </h2>
                </div>
            </div>
            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">OUR SERVICES</h3>
            </div>


            <div className='grid grid-cols-3 gap-4 bg-white h-[800px] mt-[-10px] '>


                <div className="flex flex-col items-center justify-center mt-[100px]">
                    <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[550px] w-[400px]">
                        <img src="image 6.jpg" alt="Example" className="w-[400px] h-[400px] rounded-t-2xl" />

                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center h-20px ">
                            Building Construction
                        </h3>

                        <h1 className="text-gray-700 text-2xl text-center mt-4">
                            "From vision to reality,<br />
                            we construct your dreams."
                        </h1>


                    </div>
                    <div className="flex justify-center mt-[-20px]">
                        <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                            View More
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-[100px]">
                    <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[550px] w-[400px]">
                        <img src="image 7.jpg" alt="Example" className="w-[400px] h-[400px] rounded-t-2xl" />

                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center h-20px ">
                            Gated Communities
                        </h3>

                        <h1 className="text-gray-700 text-2xl text-center mt-4">
                            "From vision to reality,<br />
                            we construct your dreams."
                        </h1>


                    </div>
                    <div className="flex justify-center mt-[-20px]">
                        <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                            View More
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-[100px]">
                    <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[550px] w-[400px]">
                        <img src="image 8.png" alt="Example" className="w-[400px] h-[400px] rounded-t-2xl" />

                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center h-20px ">
                            Apartment Development
                        </h3>

                        <h1 className="text-gray-700 text-2xl text-center mt-4">
                            "From vision to reality,<br />
                            we construct your dreams."
                        </h1>


                    </div>
                    <div className="flex justify-center mt-[-20px]">
                        <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                            View More
                        </a>
                    </div>
                </div>


            </div>
            <div className='grid grid-cols-3 gap-4  bg-white h-[800px] mt-[-50px]'>


                <div className="flex flex-col items-center justify-center mt-[100px]">
                    <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[550px] w-[400px]">
                        <img src="image 9.png" alt="Example" className="w-[400px] h-[400px] rounded-t-2xl" />

                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center h-20px ">
                            Factory Construction
                        </h3>

                        <h1 className="text-gray-700 text-2xl text-center mt-4">
                            "From vision to reality,<br />
                            we construct your dreams."
                        </h1>


                    </div>
                    <div className="flex justify-center mt-[-20px]">
                        <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                            View More
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-[100px]">
                    <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[550px] w-[400px]">
                        <img src="image 10.png" alt="Example" className="w-[400px] h-[400px] rounded-t-2xl" />

                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center h-20px ">
                            Renovation
                        </h3>

                        <h1 className="text-gray-700 text-2xl text-center mt-4">
                            "From vision to reality,<br />
                            we construct your dreams."
                        </h1>


                    </div>
                    <div className="flex justify-center mt-[-20px]">
                        <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                            View More
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-[100px]">
                    <div className="border border-gray-300 rounded-3xl shadow-2xl bg-white h-[550px] w-[400px]">
                        <img src="image 11.png" alt="Example" className="w-[400px] h-[400px] rounded-t-2xl" />

                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center h-20px ">
                            Map Projects
                        </h3>

                        <h1 className="text-gray-700 text-2xl text-center mt-4">
                            "From vision to reality,<br />
                            we construct your dreams."
                        </h1>


                    </div>
                    <div className="flex justify-center mt-[-20px]">
                        <a href="/contact" className="bg-[#1C4D74] text-white px-6 py-2 hover:bg-[#163c5b] rounded-2xl">
                            View More
                        </a>
                    </div>
                </div>


            </div>
            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">SUCCESS GROWTH</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white py-10 px-4">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3490DA] to-[#1C4D74] text-white rounded-full w-[300px] h-[300px] mx-auto">
                    <img src="cal.png" alt="Icon" className="w-20 h-20 mb-2 " />
                    <p className="text-center text-2xl font-semibold">20+<br />PROJECTS</p>
                </div>

                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3490DA] to-[#1C4D74] text-white rounded-full w-[300px] h-[300px] mx-auto">
                    <img src="Vector.png" alt="Icon" className="w-16 h-16 mb-2 " />
                    <p className="text-center text-2xl font-semibold">100+<br />GROWTH RATIO</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3490DA] to-[#1C4D74] text-white rounded-full w-[300px] h-[300px] mx-auto">
                    <img src="client.png" alt="Icon" className="w-16 h-16 mb-2 " />
                    <p className="text-center text-2xl font-semibold">200+<br />HAPPY CLIENTS</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3490DA] to-[#1C4D74] text-white rounded-full w-[300px] h-[300px] mx-auto">
                    <img src="call.png" alt="Icon" className="w-16 h-16 mb-2" />
                    <p className="text-center text-2xl font-semibold">ON TIME<br />DELIVERY</p>
                </div>

                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#3490DA] to-[#1C4D74] text-white rounded-full w-[300px] h-[300px] mx-auto">
                    <img src="Group.png" alt="Icon" className="w-30 h-30 mb-2 " />
                    <p className="text-center text-2xl font-semibold">HIGH <br />QUALITY</p>
                </div>
            </div>

            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">EXPERTISE PROJECTS </h3>
            </div>


            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">GET A QUOTE </h3>
            </div>
            <div className='mt-[-100px]'>


                <div className="ml-90 mt-40">
                    <h1 className="font-light text-4xl">
                        We are expert in this field<br />
                        since almost 10 years.
                    </h1>
                </div>
                <div className="flex items-center mt-10 mb-10 space-y-20 px-4">

                    {/* Title */}


                    {/* Image Grid Section */}
                    {/* Image Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-36 mt-24 ">
                        <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[200px] rounded-2xl shadow-md">
                            <img src="Building.png" alt="Building 1" className="w-[80px] h-[80px] object-cover rounded-t-2xl" />
                            <h2 className='font-light text-3xl mt-3'>Construction</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[200px] rounded-2xl shadow-md">
                            <img src="House plan.png" alt="Building 2" className="w-[80px] h-[80px] object-cover rounded-t-2xl" />
                            <h2 className='font-light text-3xl mt-3'>Planning</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[200px] rounded-2xl shadow-md">
                            <img src="Skyline.png" alt="Building 3" className="w-[80px] h-[80px] object-cover rounded-t-2xl" />
                            <h2 className='font-light text-3xl mt-3'>Buildings</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[200px] rounded-2xl shadow-md">
                            <img src="San pedro church.png" alt="Building 4" className="w-[80px] h-[80px] object-cover rounded-t-2xl" />
                            <h2 className='font-light text-3xl mt-3'>Architecture</h2>
                        </div>
                    </div>


                    {/* Contact Form Section */}
                    <div className="bg-[#2C4D60] w-full max-w-3xl rounded-2xl p-6 text-[#D9D9D9] font-bold ml-[100px] h-[550px] mt-[-50px]">
                        <form className="flex flex-col space-y-4 mt-20">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="text" placeholder="First Name" className="border-2 border-gray-300 rounded-md px-4 py-2 w-full h-16" />
                                <input type="text" placeholder="Last Name" className="border-2 border-gray-300 rounded-md px-4 py-2 w-full" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="text" placeholder="Contact Number" className="border-2 border-gray-300 rounded-md px-4 py-2 w-full h-16" />
                                <input type="email" placeholder="Email ID" className="border-2 border-gray-300 rounded-md px-4 py-2 w-full" />
                            </div>
                            <textarea placeholder="Message" className="border-2 border-gray-300 rounded-md px-4 py-2 h-[200px] w-full"></textarea>
                            <button type="submit" className="bg-[#3490DA] text-white px-6 py-2 hover:bg-[#163c5b] rounded-md w-max self-center">Submit</button>
                        </form>
                    </div>

                </div>
            </div>


            <div className="bg-[#061F3E] w-full h-[100px] mt-20 flex items-center justify-center">
                <h3 className="text-6xl text-white font-bold">OUR  HAPPY CLIENTS </h3>
            </div>

        </>
    )
}

export default HomePage