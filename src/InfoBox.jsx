import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { WbSunny, Cloud, Umbrella, Grain, Thunderstorm, AcUnit, WaterDrop, Air } from "@mui/icons-material";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop";

  const getWeatherIcon = (weather) => {
    const weatherLower = weather.toLowerCase();
    if (weatherLower.includes("clear")) return <WbSunny className="weatherIcon sunny" fontSize="large" />;
    if (weatherLower.includes("cloud")) return <Cloud className="weatherIcon cloudy" fontSize="large" />;
    if (weatherLower.includes("rain")) return <Umbrella className="weatherIcon rainy" fontSize="large" />;
    if (weatherLower.includes("drizzle")) return <Grain className="weatherIcon drizzle" fontSize="large" />;
    if (weatherLower.includes("thunderstorm")) return <Thunderstorm className="weatherIcon storm" fontSize="large" />;
    if (weatherLower.includes("snow")) return <AcUnit className="weatherIcon snowy" fontSize="large" />;
    if (weatherLower.includes("mist") || weatherLower.includes("fog") || weatherLower.includes("haze")) 
      return <WaterDrop className="weatherIcon misty" fontSize="large" />;
    if (weatherLower.includes("wind") || weatherLower.includes("breeze")) 
      return <Air className="weatherIcon windy" fontSize="large" />;
    return <Cloud className="weatherIcon" fontSize="large" />;
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card className="weatherCard">
          <CardMedia sx={{ height: 140 }} image={INIT_URL} title={info.city} />
          <CardContent>
            <Typography variant="h5" component="div">
              {info.city} {getWeatherIcon(info.weather)}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>The weather is: <i>{info.weather}</i></p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}