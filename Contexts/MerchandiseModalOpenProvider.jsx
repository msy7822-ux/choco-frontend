import { createContext, useState } from 'react';

export const MerchandiseModalOpenContext = createContext();

export const MerchandiseModalOpenProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openImage, setOpenImage] = useState('');

  const imageModalOpen = (image) => {
    setOpenImage(image);
    setModalOpen(true);
  };

  const imageModalClose = () => {
    setModalOpen(false);
  };

  return (
    <MerchandiseModalOpenContext.Provider
      value={{
        modalOpen,
        imageModalOpen,
        imageModalClose,
        openImage,
        setOpenImage,
      }}
    >
      { children }
    </MerchandiseModalOpenContext.Provider>
  )
};
