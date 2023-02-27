import { useEffect, useState } from "react";
import Fetcher from "../../../services/fetcher/indext";
import { openWeatherIcons, forecastFiveDays } from "../../../Util/Constants";

const WeatherFiveDays: React.FC = () => {
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

  const urlRequest = `${forecastFiveDays}q=jaboatao&appid=${
    import.meta.env.VITE_OPEW_API_KEY
  }&units=metric&lang=pt_br`;

  const data = Fetcher(urlRequest, { method: "GET" });
  const list = data?.list || [];

  return (
    <div className="h-100 d-flex align-items-center flex-column justify-content-between">
      <h3>{data?.city?.name}</h3>
      <div className="h-100 d-flex justify-content-between align-items-center flex-wrap">
        {list.map((item: any, index: number) => {
          return (
            <div key={index} className="d-flex">
              {item.dt_txt.split(" ")[1] === "21:00:00" && (
                <div>
                  <div className="h-100 m-3 d-flex flex-column justify-content-between align-items-center">
                    <p>{item.weather[0].main}</p>
                    <img
                      src={`${openWeatherIcons}${item.weather[0].icon}.png`}
                      alt=""
                    />
                    <p>{`${Math.round(item.main.temp)}°`}</p>
                    <p>{item.dt_txt.split(" ")[0]}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* <h3>{data.name}</h3>
        <div className="d-flex align-items-center justify-content-center">
        <span className="mr-3">
        {weather.description && (
          <img src={`${openWeatherIcons}${weather.icon}@4x.png`} alt="" />
          )}
          </span>
          <h1 className="weather-temp">{`${Math.round(data.main.temp)}°`}</h1>
          </div>
        <h3 className="mt-0 text-center">{weather.description}</h3> */}
      </div>
    </div>
  );
};
export default WeatherFiveDays;
