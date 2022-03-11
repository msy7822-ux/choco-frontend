import { createContext, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

export const MerchandiseImagesContext = createContext();

export const MerchandiseImagesContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const router = useRouter();

  // merchandiseInfo -> listingの時にimageのstateが残ってしまっているのを空にする
  useLayoutEffect(() => {
    if (router.pathname === '/listing') {
      setImages([]);
      return;
    }
  }, [router.pathname])

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
    <MerchandiseImagesContext.Provider value={{ images, addImages, removeImage, setImages }}>
      { children }
    </MerchandiseImagesContext.Provider>
  )
};
