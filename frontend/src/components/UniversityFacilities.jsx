import React from 'react';
import CountUp from 'react-countup';

const facilities = [
  { icon: '📚', label: 'Library' },
  { icon: '🛏️', label: 'Hostels' },
  { icon: '🚌', label: 'Transportation' },
  { icon: '🏥', label: 'Dispensary' },
];

const UniversityFacilities = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-green-700">UNIVERSITY</span> FACILITIES
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 mb-12">
        {facilities.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 text-center p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <p className="text-lg font-semibold text-green-700">{item.label}</p>
          </div>
        ))}
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage:
            'url(https://imgs.search.brave.com/cvYMydXG-JltgCe-uJuI8jdYw4aQghuhUSg6RuuElEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/YmVhbnQtY29sbGVn/ZS1vZi1lbmdpbmVl/cmluZy10ZWNobm9s/b2d5LWFtcml0c2Fy/LTI3MDg5NS5qcGc)',
        }}
      >
        <div className="bg-white bg-opacity-70 backdrop-blur-sm py-8 px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto rounded-xl">
          <div>
            <h3 className="text-4xl font-bold text-green-800">
              <CountUp end={4000} duration={3} />+
            </h3>
            <p className="text-lg text-gray-700 mt-2">STUDENTS</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-800">
              <CountUp end={300} duration={3} />+
            </h3>
            <p className="text-lg text-gray-700 mt-2">FACULTY/STAFF</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-800">
              <CountUp end={700} duration={3} />+
            </h3>
            <p className="text-lg text-gray-700 mt-2">PUBLICATIONS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityFacilities;
