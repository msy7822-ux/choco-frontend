import { createContext, useState } from 'react';

export const MerchandiseImagesModalOpenContext = createContext();

export const MerchandiseImageModalOpenProvider = ({ children }) => {
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
    <MerchandiseImagesModalOpenContext.Provider
      value={{
        modalOpen,
        imageModalOpen,
        imageModalClose,
        openImage,
        setOpenImage,
      }}
    >
      { children }
    </MerchandiseImagesModalOpenContext.Provider>
  )
};
