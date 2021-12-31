/* eslint-disable @next/next/no-img-element */
import { Box, Button, Modal } from '@mui/material';
import ReactCrop from 'react-image-crop';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ChildModalComponent = ({ open, handleClose, selectedImage,  setImageUrl, imageUrl }) => {
  const deleteImage = () => {
    const filteredImageUrl = imageUrl.filter((url) => {
      return url !== selectedImage;
    });

    setImageUrl(filteredImageUrl);
    handleClose();
  };

  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...modalStyle, width: '80%', marginX: 'auto' }}>
        <img
          src={selectedImage}
          alt='selected image url'
          style={{
            width: '100%',
            height: '100%'
          }}
        />
        <Button onClick={handleClose}>閉じる</Button>
        <Button
          variant="outlined"
          color="error"
          onClick={deleteImage}
        >
          画像を削除する
        </Button>
      </Box>
    </Modal>
  );
};