import React from "react";

// Destructure props in the function parameter
const CovidCard = ({ country, cases, deaths, recovered }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-64">
      <h2 className="text-xl font-bold mb-2">{country}</h2>
      <p className="text-gray-700">Cases: <span className="font-semibold">{cases}</span></p>
      <p className="text-red-600">Deaths: <span className="font-semibold">{deaths}</span></p>
      <p className="text-green-600">Recovered: <span className="font-semibold">{recovered}</span></p>
    </div>
  );
};

export default CovidCard;
