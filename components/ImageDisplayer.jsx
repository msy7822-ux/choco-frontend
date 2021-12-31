import { Box, } from '@mui/material';
import { BsFillImageFill } from 'react-icons/bs';

export const ImageDisplayer = ({ imageUrl, handleOpen, setSelectedImage }) => {
  return (
    <Box
      sx={{
        mr: '1rem',
        border: '1px solid #EFEFEF',
        p: 2,
        borderRadius: 2
      }}
      onClick={() => {
        if (imageUrl) {
          setSelectedImage(imageUrl);
          handleOpen();
        }
      }}
    >
      {imageUrl &&
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt='' style={{ height: 35 }}/>
      }
      {!imageUrl &&
        <BsFillImageFill size='2.5rem' color='#C6C6C6' />
      }
    </Box>

  );
};