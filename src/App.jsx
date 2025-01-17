import "./App.css";
import Page from "./Page";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./prodviders";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
