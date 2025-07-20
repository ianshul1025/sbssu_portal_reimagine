import React from "react";
import { useParams } from "react-router-dom";
import AboutData from "./Deans/AboutData";

const SingleAbout = () => {
  const { id } = useParams();
  const data = AboutData.find((item) => item.id === id);

  if (!data) return <p className="p-10 text-red-600">Page not found</p>;

  return (
    <div className="w-full min-h-screen px-6 md:px-20 py-12 bg-gradient-to-b from-[#f9f9f9] to-[#e8f5e9] text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 border-b-2 border-[#1e3a8a] pb-2">
          {data.title}
        </h1>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto mb-6 rounded-lg shadow"
        />
        {data.paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg leading-relaxed tracking-wide mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SingleAbout;
