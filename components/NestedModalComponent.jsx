import {
  Box,
  Modal
} from '@mui/material';
import { ChildModalComponent } from './ChildModalComponent';

export const NestedModalComponent = ({ open, handleClose, selectedImage, setImageUrl, imageUrl }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ width: '100%' }}>
        <ChildModalComponent
          open={open}
          handleClose={handleClose}
          selectedImage={selectedImage}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
      </Box>
    </Modal>
  );
}