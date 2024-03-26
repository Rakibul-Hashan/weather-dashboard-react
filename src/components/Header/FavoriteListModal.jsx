import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

const FavoriteListModal = () => {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);
  return (
    <>
      {/* Modal */}
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favorites.length === 0 ? (
            <p className="text-center">No Favourite Locations</p>
          ) : (
            favorites.map((favorite) => (
              <li className="hover:bg-gray-200" key={favorite.location}>
                <span onClick={() => setSelectedLocation({ ...favorite })}>
                  {favorite.location}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default FavoriteListModal;
