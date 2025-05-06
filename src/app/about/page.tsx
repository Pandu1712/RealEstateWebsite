import React from 'react'

const page = () => {
    return (
        <>
            <div className="navbar flex justify-between items-center px-[3vw] py-[1vh] bg-[#FBF5DF] h-[10vh] w-full">
                <ul className="flex space-x-[1.5vw] ml-[5vw]">
                    <li><a href="/" className="text-gray-700 font-semibold">Home</a></li>
                    <li><a href="/about" className="text-gray-700 font-semibold">About</a></li>
                    <li><a href="/services" className="text-gray-700 font-semibold">Projects</a></li>
                    <li><a href="/contact" className="text-gray-700 font-semibold">Service</a></li>
                    <li><a href="/contact" className="text-gray-700 font-semibold">Career</a></li>
                </ul>

                <div className="flex items-center border border-[#5A5A5A] rounded-md overflow-hidden w-[25vw] mr-[5vw] rounded-r-full rounded-l-full">
                    <input
                        type="text"
                        placeholder="Search by Keyword"
                        className="px-[1vw] py-[0.5vh] outline-none"
                    />
                    <button className="bg-[#1C4D74] text-white px-[1vw] py-[0.5vh] hover:bg-[#1C4D74] rounded-r-full ml-[10vw]">
                        🔍
                    </button>
                </div>
            </div>

            <div className="bg-[#061F3E] w-full h-[10vh] flex items-center justify-center">
                <h3 className="text-[5vh] text-white font-bold">About Us </h3>
            </div>

            <div className="relative w-full h-[100vh]">
                <img src="image 24.png" alt="Example" className="w-full h-[70vh] object-cover" />

                <div className="absolute top-[12vh] left-0 w-full text-center px-[5vw]">
                    <h2 className="text-[#2C4D60] font-semibold text-[6vh] mb-[1vh]">
                        Building Excellence For Over a Decade
                    </h2>
                    <p className="text-[#2C4D60] text-[2.5vh] max-w-[80vw] mx-auto leading-relaxed font-bold">
                        We are more than just a construction company — we are builders of dreams, architects of innovation,
                        and creators of lasting impressions. With a rich legacy spanning over 10 years, we have established
                        ourselves as a trusted name in the construction industry.
                    </p>
                    <p className="text-[#2C4D60] text-[2.5vh] max-w-[80vw] mx-auto leading-relaxed font-bold">
                        We are more than just a construction company — we are builders of dreams, architects of innovation,
                        and creators of lasting impressions. With a rich legacy spanning over 10 years, we have established
                        ourselves as a trusted name in the construction industry.
                    </p>

                    <div>
                        <button className="bg-[#1C4D74] text-white px-[2vw] py-[1vh] mt-[25vh] ml-[70vw] hover:bg-[#1C4D74]">
                            View More
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#061F3E] w-full h-[10vh] mt-[-25vh] flex items-center justify-center">
                <h3 className="text-[5vh] text-white font-bold">OUR PROMISE </h3>
            </div>
            <div className="relative h-[120vh] w-full overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-md h-full"
                ><img src="image 29.png" alt="" className='w-full h-[150vh]' /></div>

                <div className="absolute inset-0 bg-black opacity-0"></div>



                <div className="relative z-10 grid grid-flow-col grid-rows-3 gap-[1vh] px-[5vw] py-[5vh] ml-[10vw] h-[90vh]">

                    <div className="row-span-2 row-start-2 border border-gray-300 rounded-3xl shadow-2xl bg-white h-[40vh] w-[15vw] flex flex-col items-center">
                        <img src="image 6.jpg" alt="Card 1" className="w-[25vw] h-[50vh] rounded-t-2xl" />
                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center py-[1vh]">
                            Building Construction
                        </h3>
                        <h1 className="text-gray-700 text-[2vh] text-center px-[1vw] mt-[1vh]">
                            "From vision to reality,<br /> we construct your dreams."
                        </h1>
                        <div className="mt-[1vh]">
                            <a href="/contact" className="bg-[#1C4D74] text-white px-[1.5vw] py-[1vh] hover:bg-[#163c5b] rounded-2xl">
                                View More
                            </a>
                        </div>
                    </div>

                    <div className="row-span-2 row-end-3 border border-gray-300 rounded-3xl shadow-2xl bg-white h-[40vh] w-[15vw] flex flex-col items-center">
                        <img src="image 6.jpg" alt="Card 2" className="w-[25vw] h-[50vh] rounded-t-2xl" />
                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center py-[1vh]">
                            Interior Design
                        </h3>
                        <h1 className="text-gray-700 text-[2vh] text-center px-[1vw] mt-[1vh]">
                            "Crafting comfort ,<br /> inside every space."
                        </h1>
                        <div className="mt-[1vh]">
                            <a href="/contact" className="bg-[#1C4D74] text-white px-[1.5vw] py-[1vh] hover:bg-[#163c5b] rounded-2xl">
                                View More
                            </a>
                        </div>
                    </div>

                    <div className="row-start-2 row-end-4 border border-gray-300 rounded-3xl shadow-2xl bg-white h-[40vh] w-[15vw] flex flex-col items-center">
                        <img src="image 6.jpg" alt="Card 3" className="w-[25vw] h-[50vh] rounded-t-2xl" />
                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center py-[1vh]">
                            Architecture
                        </h3>
                        <h1 className="text-gray-700 text-[2vh] text-center px-[1vw] mt-[1vh]">
                            "Designing structures<br /> that inspire and endure."
                        </h1>
                        <div className="mt-[1vh]">
                            <a href="/contact" className="bg-[#1C4D74] text-white px-[1.5vw] py-[1vh] hover:bg-[#163c5b] rounded-2xl">
                                View More
                            </a>
                        </div>
                    </div>


                    <div className="col-start-2 row-end-4 border border-gray-300 rounded-3xl shadow-2xl bg-white h-[40vh] w-[15vw] flex flex-col items-center">
                        <img src="image 6.jpg" alt="Card 4" className="w-[25vw] h-[50vh] rounded-t-2xl" />
                        <h3 className="text-2xl font-bold bg-[#DEF1FF] w-full text-center py-[1vh]">
                            Architecturesss
                        </h3>
                        <h1 className="text-gray-700 text-[2vh] text-center px-[1vw] mt-[1vh]">
                            "Designing structures<br /> that inspire and endure."
                        </h1>
                        <div className="mt-[1vh]">
                            <a href="/contact" className="bg-[#1C4D74] text-white px-[1.5vw] py-[1vh] hover:bg-[#163c5b] rounded-2xl">
                                View More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#061F3E] w-full h-[10vh] mt-[10vh] flex items-center justify-center">
                <h3 className="text-[5vh] text-white font-bold">OUR TEAM </h3>
            </div>
            

        </>
    )
}

export default page
