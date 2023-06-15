import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '780962011a904cd9a17120648231306'; // Replace with your WeatherAPI API key

  useEffect(() => {
    // Fetch weather data based on user's location
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    // Get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getUserLocation();
  }, [apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div id='weather-app' className='container'>
    <h1 id='weather-heading'>Weather Information</h1>
    <ul id='weather-data-list' >
  <li className='align'><a href="https://www.msn.com/en-us/weather/forecast/in-?loc=eyJ0IjoxLCJ4IjoxNi40NDEsInkiOjQzLjUxfQ%3d%3d&ocid=ansmsnweather" alt="See a complete weather forecast"target="_blank" >{weatherData.location.name}, {weatherData.location.country}</a></li>
  <li>{weatherData.current.temp_c}°C</li>
  <li>{weatherData.current.condition.text}</li>
      {/* Additional weather data can be displayed here */}
      </ul>
    </div>
  );
};

export default WeatherApp;
