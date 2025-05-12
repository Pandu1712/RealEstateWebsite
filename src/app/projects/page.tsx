import React from 'react'

const page = () => {
    return (
        <>
            <div className="bg-[#061F3E] w-full h-[100px] flex items-center justify-center mt-[10vh]">
                <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">PROJECTS</h3>
            </div>

            <div className="relative w-full h-auto">
                <img src="image 34.png" alt="Example" className="w-full h-[500px] md:h-[650px] lg:h-[850px] object-cover" />
                <div className="absolute top-[12vh] left-0 w-full text-center px-[5vw]">
                    <h2 className="text-white font-semibold text-[4vh] md:text-[5vh] lg:text-[6vh] mb-[1vh]">
                        Building Excellence For Over a Decade
                    </h2>
                    <p className="text-white text-[2vh] md:text-[2.3vh] lg:text-[2.5vh] max-w-[90vw] md:max-w-[80vw] mx-auto leading-relaxed font-bold">
                        "Your satisfaction drives us; we build relationships as we build structures."
                    </p>
                    <p className="text-white text-[2vh] md:text-[2.3vh] lg:text-[2.5vh] max-w-[90vw] md:max-w-[80vw] mx-auto leading-relaxed font-bold mt-2">
                        We are more than just a construction company — we are builders of dreams, architects of innovation,
                        and creators of lasting impressions. With a rich legacy spanning over 10 years, we have established
                        ourselves as a trusted name in the construction industry.
                    </p>
                </div>
            </div>

            <div className="bg-[#061F3E] w-full h-[100px] mt-10 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">OUR CURRENT PROJECTS</h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 bg-white px-4 md:px-10 pb-10'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="relative h-[300px] flex flex-col items-center justify-center">
                        <img
                            src="image 34.png"
                            alt="Example"
                            className="w-[30vh] h-[30vh] object-cover rounded-2xl"
                        />
                        <div className="mt-5 text-center">
                            <a
                                href="#"
                                className="text-black text-base md:text-lg font-semibold bg-white px-6 py-2 rounded-xl transition border inline-block">
                                Book Your Flat
                            </a>
                            <h3 className='font-bold mt-3 text-sm md:text-base'>
                                Acchuthapuram<br /> CBM Compound <br />VSKP
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <section className="py-12 md:py-16 px-4 md:px-10 lg:px-20 text-[#1C4D74] bg-[#FBF5DF]">
                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center underline underline-offset-5 decoration-[#1C4D74]">
                        Our Journey
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                        Our journey began a decade ago with a vision to redefine construction practices and set new benchmarks<br />
                        for quality, efficiency, and sustainability. Over the years, we have evolved, adapted, and grown, always
                        striving to exceed expectations.
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center underline underline-offset-5 decoration-[#1C4D74]">Our Expertise</h3>
                    <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                        Nithish Infracon specializes in taking on a wide spectrum of construction projects. Whether it's residential,<br />
                        commercial, industrial, or infrastructure development, we have the expertise, resources, and commitment to<br />
                        deliver excellence. Our team of seasoned professionals brings a wealth of knowledge and experience to every
                        project, ensuring precision and perfection in every detail.
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center underline underline-offset-5 decoration-[#1C4D74]">What Sets Us Apart</h3>
                    <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                        At Nithish Infracon, we believe that what sets us apart is our unwavering commitment to quality, safety, and<br />
                        customer satisfaction. We understand that every project is a partnership, and we work closely with our clients<br />
                        to bring their visions to life. Our dedication to using cutting-edge technology and sustainable construction<br />
                        practices not only ensures the longevity of our structures but also minimizes our environmental footprint.
                    </p>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center underline underline-offset-5 decoration-[#1C4D74]">Our Promise</h3>
                    <ul className="pl-5 text-gray-700 space-y-2 text-center text-sm md:text-base">
                        <li><strong>Quality:</strong> We never compromise on quality. Our work speaks for itself, showcasing the highest standards in craftsmanship.</li>
                        <li><strong>Safety:</strong> Safety is paramount. We are committed to creating a secure work environment for our team and stakeholders.</li>
                        <li><strong>Customer-Centric Approach:</strong> Our clients are at the heart of everything we do. We listen, collaborate, and deliver on promises.</li>
                        <li><strong>Innovation:</strong> We embrace innovation and constantly seek better, more efficient ways to build.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center underline underline-offset-5 decoration-[#1C4D74]">Our Future</h3>
                    <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                        As we move forward, our commitment to excellence remains steadfast. We look to the future with optimism and<br />
                        determination, ready to take on new challenges and continue building a better world.
                    </p>
                    <p className="mt-6 text-gray-800 font-semibold text-2xl md:text-3xl lg:text-4xl mb-3 text-center">
                        Join us on our journey to build the future, one project at a time. <br />
                        Thank you for considering Nithish Infracon Pvt Ltd for your construction needs.
                    </p>
                </div>
            </section>

            <div className="bg-[#061F3E] w-full h-[100px] mt-10 flex items-center justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">OUR UP PROJECTS</h3>
            </div>

            <div className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] mt-20">
                <img src="image 39.png" alt="Example" className="w-full h-full object-cover" />

                <img
                    src="image 41.png"
                    alt="Left"
                    className="absolute top-[5vh] left-[5vw] w-[250px] md:w-[400px] lg:w-[550px] h-auto object-cover rounded-lg shadow-xl"
                />
                <img
                    src="image 42.png"
                    alt="Right"
                    className="absolute bottom-[5vh] right-[5vw] w-[250px] md:w-[400px] lg:w-[550px] h-auto object-cover rounded-lg shadow-xl"
                />
            </div>
        </>
    )
}

export default page
