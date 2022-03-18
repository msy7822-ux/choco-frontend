import { createContext, useEffect, useState } from 'react';

export const ModalOpenContext = createContext();

export const MerchandiseInfoCommentModalOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const commentModalOpen = () => {
    setIsOpen(true);
  };

  const commentModalClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalOpenContext.Provider
      value={{ isOpen, commentModalOpen, commentModalClose }}
    >
      { children }
    </ModalOpenContext.Provider>
  )
};
