import { createContext, useState } from 'react';

export const MerchandiseImagesContext = createContext();

export const MerchandiseImagesContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const addImages = (image) => {
    if (images.length === 4) {
      return images;
    } else {
      setImages([...images, image]);
    }

    return images;
  };

  const removeImage = (image) => {
    const filteredImage = images.filter((url) => {
      return url !== image;
    });

    setImages(filteredImage);
  };

  return (
    <MerchandiseImagesContext.Provider value={{ images, addImages, removeImage }}>
      { children }
    </MerchandiseImagesContext.Provider>
  )
};
