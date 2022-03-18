export const handleClickRemoveImage = (image, removeImage, imageModalClose) => {
  removeImage(image);
  imageModalClose(false);
};
