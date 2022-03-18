import { createContext, useState, useRef } from 'react';

export const userIsFavoriteContext = createContext();

export const UserIsFavoriteProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const unmountFavorite = useRef(false);

  const favoriteToggle = () => {
    if (isFavorite) {
      setIsFavorite(false);
      unmountFavorite.current = false;
      console.log('unmountFavorite.current', unmountFavorite.current)
    } else if (!isFavorite) {
      setIsFavorite(true);
      unmountFavorite.current = true;
      console.log('unmountFavorite.current', unmountFavorite.current)
    }
  };

  return (
    <userIsFavoriteContext.Provider
      value={{
        isFavorite,
        favoriteToggle,
        unmountFavorite,
        setIsFavorite
      }}
    >
      { children }
    </userIsFavoriteContext.Provider>
  )
};
