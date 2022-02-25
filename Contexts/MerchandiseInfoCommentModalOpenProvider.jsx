import { createContext, useState } from 'react';

export const MerchandiseInfoCommentModalOpenContext = createContext();

export const MerchandiseInfoCommentModalOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const commentModalOpen = () => {
    setIsOpen(true);
  };

  const commentModalClose = () => {
    setIsOpen(false);
  };

  return (
    <MerchandiseInfoCommentModalOpenContext.Provider
      value={{ isOpen, commentModalOpen, commentModalClose }}
    >
      { children }
    </MerchandiseInfoCommentModalOpenContext.Provider>
  )
};
