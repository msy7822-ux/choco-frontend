import { useContext } from 'react';
import { FormLabelComponent } from '../atoms/FormLabelComponent';
import { InputComponent } from '../atoms/inputComponent';
import { PlusIconComponent } from '../atoms/plusIconComponent';
import { imageUpload } from '../../utils/functions/imageUpload';
import { MerchandiseImagesContext } from '../../Contexts/MerchandiseImageProvider';

const ImageUploadComponentPulsIconClasses = 'text-[35px] border box-content p-3 rounded-md text-[#848484]'

export const ImageUploaderComponent = ({ className }) => {
  const { images, addImages } = useContext(MerchandiseImagesContext)

  return (
    <FormLabelComponent htmlFor='image_uploader'>
      <InputComponent
        type='file'
        accept='image/*'
        name='image_uploader'
        id='image_uploader'
        className={`hidden ${className || ''}`}
        onChange={(event) => imageUpload(event, images, addImages)}
      />
      <PlusIconComponent className={ImageUploadComponentPulsIconClasses} />
    </FormLabelComponent>

  )
};
