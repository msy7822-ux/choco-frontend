import { ListingImageModalComponent } from '../organisms/ListingImageModalComponent';
import { ListingFormsComponent } from '../organisms/ListingFormsComponent';
import { ImageComponent } from '../atoms/ImageComponent';
import { useContext } from 'react';
import { MerchandiseIsInvalidContext } from '../../Contexts/MerchandiseIsInvalidProvider';
import { MerchandiseImagesModalOpenContext } from '../../Contexts/MerchandiseImageModalOpenProvider';

export const ListingFormsComponentWrapper = () => {
  const { modalOpen, imageModalClose, openImage } = useContext(MerchandiseImagesModalOpenContext);
  // MEMO: detailsには、入力が不足している入力項目名が格納される
  const { isInvalid, details } = useContext(MerchandiseIsInvalidContext);
  console.log(details.filter(Boolean))

  return (
    <>
      <div className={`text-center m-auto mb-5 ${isInvalid ? '' : 'hidden'}`}>
        <div className='text-left text-[#dd2828] bg-[#fad5d5] mx-[15%] mt-6 py-3 px-2 rounded'>
          {details && details.filter(Boolean).length !== 0 &&
            details.filter(Boolean).map((detail, key) => {
              return (
                <div
                  key={key}
                >
                  ・{ detail }を入力してください
                </div>
              )
            })
          }
        </div>
      </div>

      <ListingFormsComponent />

      <ListingImageModalComponent
        isOpen={modalOpen}
        handleClose={imageModalClose}
        openImage={openImage}
      >
        <div className='bg-white'>
          <ImageComponent
            src={openImage}
            alt=''
          />
        </div>
      </ListingImageModalComponent>
    </>
  )
};
