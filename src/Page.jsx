import { useContext, useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherContext } from "./context";

const Page = () => {
  const { loading, weatherData } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");
  const { climate } = weatherData;
  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }
  useEffect(() => {
    setClimateImage(getBackgroundImage(climate));
  }, [climate ]);
  return (
    <>
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <div style={{ backgroundImage: `url(${climateImage})` }} className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              {/* Begin Wheather */}
              <WeatherBoard />
              {/* End Wheather */}
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
