import React, { useEffect, useState } from 'react';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch weather data from the API
    fetch('https://ab.chatgpt.com/v1/rgstr?k=client-tnE5GCU2F2cTxRiMbvTczMDT1jpwIigZHsZSdqiy4u&st=javascript-client-react&sv=3.12.0&t=1740358956908&sid=bd452fa6-c5e0-42da-b489-de002376b9ba&ec=1')
      .then((response) => {
        console.log("Response status:", response.status);  // Check response status
        return response.json();  // Parse response to JSON
      })
      .then((data) => {
        console.log("Fetched data:", data);  // Log the data to see if it's correct
        if (Array.isArray(data) && data.length > 0) {
          setWeatherData(data);  // Store the data in the state
        } else {
          console.log("No data or incorrect data format received");
        }
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display a loading message while fetching data
  }

  return (
    <div>
      <h2>Weather Forecast</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Temperature (°F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.length === 0 ? (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          ) : (
            weatherData.map((forecast, index) => (
              <tr key={index}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherForecast;
