'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
    name: 'John Doe',
    review: 'Amazing experience working with the team. Truly professional!',
  },
  {
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    name: 'Jane Smith',
    review: 'Very reliable and the quality of work is exceptional.',
  },
  {
    image: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'Michael Lee',
    review: 'Exceeded our expectations. Great attention to detail!',
  },
  {
    image: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
    name: 'Emily Brown',
    review: 'Outstanding service from start to finish!',
  },
  {
    image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
    name: 'David Wilson',
    review: 'Always on time and budget. Highly recommended!',
  },
  {
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    name: 'Sophia Green',
    review: 'Great communication and results throughout the project.',
  }
,  
  
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 3
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <div className="py-10 bg-[#FBF5DF] text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#1C4D74]">Client Reviews</h2>

      <div className="flex justify-center gap-6 px-6 flex-wrap">
        {visibleTestimonials.map((t, index) => (
          <div
            key={index}
            className="w-[500px]  h-[30vh] p-4 bg-white rounded-lg shadow-md text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-40 h-40 rounded-full mx-auto border-2 border-[#1C4D74] object-cover mb-3"
            />
            <h3 className="font-semibold text-[#1C4D74]">{t.name}</h3>
            <p className="text-gray-600 italic mt-2">"{t.review}"</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-10 text-3xl text-[#1C4D74]">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
