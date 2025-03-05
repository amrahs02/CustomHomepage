import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=d900376fb27641f16b6b293b36789c71
&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="text-gray-300 text-lg">
      {error ? (
        `❌ ${error}`
      ) : weather ? (
        `🌡️ ${weather.main.temp}°C | ${weather.weather[0].description}`
      ) : (
        "Loading weather..."
      )}
    </div>
  );
};

export default Weather;
