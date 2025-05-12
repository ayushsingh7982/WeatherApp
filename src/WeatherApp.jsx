import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.56,
    temp: 25.55,
    tempMin: 18.65,
    tempMax: 30.6,
    humidity: 78,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ 
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem"
    }}>
      <h2>Weather App by Ayush</h2>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
