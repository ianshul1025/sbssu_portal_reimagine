import React from 'react';

const AboutAndVC = () => {
  return (
    <section className="py-12 bg-[#BBB2AB]">
      <div className="max-w-7xl mx-auto px-4 md:flex md:space-x-8">
        
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col md:flex-row items-start bg-gray-50 p-4 rounded-lg shadow-sm">
          <img
            src="https://imgs.search.brave.com/mza1tY0_DSXH4drO3Dm9NuXhYFAM2Wz14sF39VKrKHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/Z3VyZGFzcHVyL2I4/Lzk5OTlwMTg3NC4x/ODc0LjIzMDkwODIw/MDA0Ny5zNWI4L2Nh/dGFsb2d1ZS9zYXJk/YXItYmVhbnQtc2lu/Z2gtc3RhdGUtdW5p/dmVyc2l0eS1iYXJ5/YXItZ3VyZGFzcHVy/LXVuaXZlcnNpdGll/cy0xZHl5MDdhb2h1/LmpwZz93PTM4NDAm/cT03NQ" 
            alt="SBSSU Campus"
            className="w-32 h-32 object-cover rounded mb-4 md:mb-0 md:mr-6 shadow"
          />
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">About SBSSU</h2>
            <p className="text-gray-700 mb-4">
              Sardar Beant Singh State University (SBSSU) is committed to providing quality education in engineering, sciences, and management to empower future leaders. The university fosters innovation, research, and values-driven development...
            </p>
            <a
              href="/about"
              className="inline-block bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 transition"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row items-start bg-gray-50 p-4 rounded-lg shadow-sm">
          <img
            src="https://www.sbssugsp.ac.in/assets/images/vc_sir.jpg"
            alt="Vice Chancellor"
            className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0 md:mr-6 shadow"
          />
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Vice Chancellor’s Desk</h3>
            <p className="text-gray-700 mb-4">
              “At SBSSU, we aim to create an academic environment that encourages critical thinking, innovation, and integrity. Our mission is to nurture capable professionals who contribute meaningfully to society...”
            </p>
            <a
              href="/vc-desk"
              className="inline-block bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 transition"
            >
              Read More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndVC;
