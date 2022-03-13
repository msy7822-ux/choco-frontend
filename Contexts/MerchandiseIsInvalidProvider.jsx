import { createContext, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

export const MerchandiseIsInvalidContext = createContext();

export const MerchandiseIsInvalidProvider = ({ children }) => {
  const router = useRouter();
  const [isInvalid, setIsInvalid] = useState(false);
  const [notFoundLogin, setNotFoundLogin] = useState(false);
  const [details, setDetails] = useState([]);

  // マウント時とアンマウント時にstateを元に戻す
  useLayoutEffect(() => {
    if (router.pathname === '/listing' || router.pathname === '/merchandises/[id]/edit') {
      setIsInvalid(false);
      setNotFoundLogin(false);
      return;
    }

    return () => {
      if (router.pathname === '/listing' || router.pathname === '/merchandises/[id]/edit') {
        setIsInvalid(false);
        setNotFoundLogin(false);
        return;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MerchandiseIsInvalidContext.Provider
      value={{
        isInvalid,
        setIsInvalid,
        details,
        setDetails,
        notFoundLogin,
        setNotFoundLogin
      }}
    >
      { children }
    </MerchandiseIsInvalidContext.Provider>
  )
};
