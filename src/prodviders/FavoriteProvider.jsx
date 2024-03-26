import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([...favorites, { longitude, latitude, location }]);
    console.log(longitude, latitude, location);
  };
  const removeFromFavorites = (location) => {
    const restFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
