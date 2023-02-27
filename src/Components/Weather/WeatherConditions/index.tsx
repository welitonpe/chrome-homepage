import { useEffect, useState } from "react";
import Fetcher from "../../../services/fetcher/indext";
import { openWeatherIcons, weatherConditions } from "../../../Util/Constants";

const WeatherConditions: React.FC = () => {
  const [location, setLocation] = useState({
    accuracy: 0,
    latitude: 0,
    longitude: 0,
    timestamp: 0,
  });

  useEffect(() => {
    const localization = navigator.geolocation.getCurrentPosition(
      (data) =>
        setLocation({
          accuracy: data.coords.accuracy,
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          timestamp: data.timestamp,
        }),
      (Error) => Error,
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  // const urlRequest = `${weatherConditions}lat=${location.latitude}&lon=${
  //   location.longitude
  // }&appid=${import.meta.env.VITE_OPEW_API_KEY}&units=metric&lang=pt_br`;

  const urlRequest = `${weatherConditions}q=recife&appid=${
    import.meta.env.VITE_OPEW_API_KEY
  }&units=metric&lang=pt_br`;

  const data = Fetcher(urlRequest, { method: "GET" });
  const weather = data?.weather[0];

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>{data?.name}</h3>
        <div className="d-flex align-items-center justify-content-center">
          <span className="mr-3">
            {weather?.description && (
              <img src={`${openWeatherIcons}${weather.icon}@4x.png`} alt="" />
            )}
          </span>
          <h1 className="weather-temp">{`${Math.round(data?.main?.temp)}°`}</h1>
        </div>
        <h3 className="mt-0 text-center">{weather?.description}</h3>
      </div>
    </>
  );
};
export default WeatherConditions;
