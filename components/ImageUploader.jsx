import { Input, InputLabel } from '@mui/material';
import { BsFillCameraFill } from 'react-icons/bs';

export const ImageUploader = ({ setImageUrl, imageUrl, setIsMaxImage }) => {
  const handleChangeImage = (event) => {
    if (imageUrl.length === 3) {
      setIsMaxImage(true);
      return;
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onload = function() {
        console.log('file upload result ', reader.result);
        setImageUrl([...imageUrl, reader.result]);
      };
    } catch (error) {
      console.log('エラーの内容: ', error)
    }
  };

  return (
    <InputLabel
      htmlFor="file_photo"
      sx={{
        border: '1px solid #EFEFEF',
        borderRadius: 2,
        p: 2,
        mr: '1rem',
      }}>
      <BsFillCameraFill size='2.5rem' color='#C6C6C6' />
      <Input
        id="file_photo"
        name='file_photo'
        sx={{
          height: '100%',
          width: '100%',
          display: 'none'
        }}
        type="file"
        accept="image/*"
        onChange={handleChangeImage}
      />
    </InputLabel>
  );
}