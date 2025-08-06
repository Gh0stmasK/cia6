
import React, { useState } from "react";
import axios from "axios";
import CovidCard from "./components/CovidCard";
import Navbar from './components/Navbar';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Remove initial fetch. Data will only be loaded when fetch button is clicked.

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://disease.sh/v3/covid-19/countries?sort=cases&limit=8');
      setData(response.data.slice(0, 8));
    } catch {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const FetchButton = ({ onClick, loading }) => (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Fetch Data'}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8">COVID-19 Dashboard</h1>
      {loading && <div className="text-center text-lg">Loading...</div>}
      {error && <div className="text-center text-red-600">{error}</div>}
      {!loading && !error && data.length > 0 && Array.isArray(data) && (
        <div className="flex flex-wrap justify-center">
          {data.map((country) => (
            <CovidCard
              key={country.country}
              country={country.country}
              cases={country.cases}
              deaths={country.deaths}
              recovered={country.recovered}
            />
          ))}
        </div>
      )}
      <FetchButton onClick={fetchData} loading={loading} />
    </div>
  );
}

export default App;
