import React from 'react';

const Services = () => {
    return (
        <>
            {/* Top Heading */}
            <div className="bg-[#061F3E] w-full h-[100px] flex items-center justify-center mt-[10vh]">
                <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">OUR SERVICES</h3>
            </div>

            {/* Intro Section */}
            <section className="bg-[#FBF5DF] py-12 px-4 md:px-10 lg:px-20 text-center text-[#1C4D74]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Crafting Excellence Beyond Expectations</h2>
                <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto">
                    At Nithish Infracon, we offer a wide range of construction-related services tailored to meet every client’s need with precision,
                    professionalism, and a passion for perfection. From concept to creation, our services are designed to deliver more than just buildings — we deliver value.
                </p>
            </section>

            {/* Services Grid */}
            <div className="bg-white px-4 md:px-10 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    {
                        title: "Residential Construction",
                        desc: "From luxurious apartments to affordable housing, we design and build homes with safety, comfort, and style in mind.",
                        image: "https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/low-cost-home-construction-techniques/_jcr_content/root/container/container_1646056284/teaser_copy_86651871.coreimg.jpeg/1711525970470/house-budget-1.jpeg"
                    },
                    {
                        title: "Commercial Projects",
                        desc: "We develop smart commercial spaces — offices, retail centers, and mixed-use buildings that inspire productivity.",
                        image: "https://www.starestate.in/assets/images/paras-avenue-129.webp"
                    },
                    {
                        title: "Architectural Design",
                        desc: "Creative and functional designs that align with your vision, while also being structurally efficient and aesthetic.",
                        image: "https://leadesign.com.au/wp-content/uploads/2018/11/lea-design-studio-gold-coast-blog-reading-architectural-drawings-101-part-a-header-1080x675.jpg"
                    },
                    {
                        title: "Interior Designing",
                        desc: "Stylish, elegant, and purposeful interior designs that bring your spaces to life.",
                        image: "https://jdinstituteoffashiontechnology.com/wp-content/uploads/2021/08/interior-designer-career-1024x691.jpeg"
                    },
                    {
                        title: "Infrastructure Development",
                        desc: "From roads to utilities, we help shape the backbone of modern communities with durable infrastructure.",
                        image: "https://business.cornell.edu/wp-content/uploads/sites/2/2022/06/India-infrastructure.featured.600x400-600x400.jpg"
                    },
                    {
                        title: "Renovation & Remodeling",
                        desc: "Give your old spaces a fresh, new life with our expert renovation solutions.",
                        image: "https://mccoymart.com/post/wp-content/uploads/13-Nov-24-Renovation-vs-remodeling1.jpg"
                    }
                ].map((service, index) => (
                    <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-[#FBF5DF]">
                        <img src={service.image} alt={service.title} className="w-full h-[200px] object-cover" />
                        <div className="p-6">
                            <h4 className="text-[#1C4D74] text-xl font-semibold mb-2">{service.title}</h4>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Closing Statement */}
            <section className="bg-[#061F3E] text-white py-12 text-center px-4 md:px-10 lg:px-20">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">Let’s Build Something Amazing Together</h3>
                <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                    Whether you're envisioning a dream home, a commercial powerhouse, or a unique architectural concept — our team is ready to turn your ideas into reality.
                    Trust Nithish Infracon Pvt Ltd to deliver with integrity, quality, and a promise of excellence.
                </p>
            </section>
        </>
    );
};

export default Services;
