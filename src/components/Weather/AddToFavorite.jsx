import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";
const AddToFavorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const [isFavorite, setToggleFavorite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setToggleFavorite(found);
  }, []);
  const handleFavorites = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }

    setToggleFavorite(!isFavorite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="HeartIcon" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
