import CardPage from "../Components/Card";
import Mapa from "../Components/Charts/weather";
import TransitMap from "../Components/TransitMap";
import WeatherConditions from "../Components/Weather/WeatherConditions";
import WeatherFiveDays from "../Components/Weather/WeatherFiveDays";

const Home: React.FC = () => {
  return (
    <div className="container-fluid ml-0 pl-0 d-flex flex-column justify-content-between h-100">
      <Mapa />
      <div className="d-flex mb-3 h-100 ">
        <div className="mr-3 h-100">
          {/* <WeatherConditions /> */}
          <CardPage classNames=" d-flex flex-column justify-content-center align-items-center"></CardPage>
        </div>
        <div className="mr-3">
          {/* <WeatherFiveDays /> */}
          <CardPage classNames="d-flex flex-column justify-content-center align-items-center"></CardPage>
        </div>
        <div>
          <CardPage classNames=""></CardPage>
        </div>
      </div>
      <div className="d-flex mb-3 h-100">
        <div className="mr-3 h-100">
          {/* <TransitMap /> */}
          <CardPage classNames=""></CardPage>
        </div>
        <div className="mr-3">
          <CardPage classNames="h-100" />
        </div>
        <div>
          <CardPage classNames="h-100" />
        </div>
      </div>
      <div className="d-flex mb-3 h-100">
        <div className="mr-3 h-100">
          <CardPage classNames="h-100" />
        </div>
        <div className="mr-3">
          <CardPage classNames="h-100" />
        </div>
        <div>
          <CardPage classNames="h-100" />
        </div>
      </div>
    </div>
  );
};
export default Home;
