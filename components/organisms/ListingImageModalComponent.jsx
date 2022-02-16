import { useContext } from 'react';
import { ModalComponent } from '../atoms/ModalComponent';
import { ButtonComponent } from '../atoms/ButtonComponent';
import { MerchandiseImagesContext } from '../../Contexts/MerchandiseImageProvider';
import { MerchandiseImagesModalOpenContext } from '../../Contexts/MerchandiseImageModalOpenProvider';
import { handleClickRemoveImage } from '../../utils/functions/onClickCallbacks/listingImageModalComponentFunctions';

export const ListingImageModalComponent = ({
  isOpen,
  handleClose,
  children,
  openImage,
}) => {
  const { removeImage } = useContext(MerchandiseImagesContext);
  const { imageModalClose } = useContext(MerchandiseImagesModalOpenContext);

  return (
    <ModalComponent
      isOpen={isOpen}
      className='bg-[rgba(0,0,0,0.8)]'
    >
      <div className='m-7'>
        { children }
      </div>
      <div className='flex justify-around'>
        <ButtonComponent
          onClick={handleClose}
          className='bg-blue-500 select-none text-white font-bold py-2 px-4 rounded-full'
        >
          閉じる
        </ButtonComponent>
        <ButtonComponent
          onClick={() => handleClickRemoveImage(openImage, removeImage, imageModalClose)}
          className='bg-blue-500 select-none text-white font-bold py-2 px-4 rounded-full'
        >
          画像を削除する
        </ButtonComponent>
      </div>
    </ModalComponent>
  )
};
