import { createContext, useState } from 'react';

export const MerchandiseIsInvalidContext = createContext();

export const MerchandiseIsInvalidProvider = ({ children }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [details, setDetails] = useState([]);

  return (
    <MerchandiseIsInvalidContext.Provider value={{ isInvalid, setIsInvalid, details, setDetails  }}>
      { children }
    </MerchandiseIsInvalidContext.Provider>
  )
};
