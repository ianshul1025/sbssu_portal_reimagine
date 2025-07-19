import React from 'react';

const photos = [
  { src: 'https://www.sbssugsp.ac.in/static/media/vc-2.fb3441a3f7f66031adab.jpg', caption: 'Tech Fest 2024' },
  { src: 'https://www.sbssugsp.ac.in/static/media/vc-2.fb3441a3f7f66031adab.jpg', caption: 'Sports Meet' },
  { src: 'https://www.sbssugsp.ac.in/static/media/vc-2.fb3441a3f7f66031adab.jpg', caption: 'Cultural Night' },
  { src: 'https://www.sbssugsp.ac.in/static/media/vc-2.fb3441a3f7f66031adab.jpg', caption: 'Independence Day' },
  { src: 'https://www.sbssugsp.ac.in/static/media/vc-2.fb3441a3f7f66031adab.jpg', caption: 'Convocation 2023' },
  { src: 'https://www.sbssugsp.ac.in/static/media/vc-2.fb3441a3f7f66031adab.jpg', caption: 'Workshop on AI' },
];

const CampusPulse = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Campus Pulse</h2>
        <p className="text-center text-gray-600 mb-10">Snapshots from our vibrant university life</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusPulse;
