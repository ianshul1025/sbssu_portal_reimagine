import React from "react";
import { Link } from "react-router-dom";
import AboutData from "./AboutData";
import LeaderShipData from "../LeaderShip/LeaderShipData";

const Allabout = () => {
  return (
    <>
      <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {LeaderShipData.map(({ id, title, image, paragraphs }) => (
            <Link key={id} to={`/about/${id}`} className="bg-white p-6 rounded shadow hover:shadow-xl transition">
              <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">{title}</h2>
              <p>{paragraphs[0].slice(0, 100)}...</p>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {AboutData.map(({ id, title, image, paragraphs }) => (
            <Link key={id} to={`/about/${id}`} className="bg-white p-6 rounded shadow hover:shadow-xl transition">
              <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">{title}</h2>
              <p>{paragraphs[0].slice(0, 100)}...</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Allabout;
