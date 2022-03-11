import { ListingImageModalComponent } from '../organisms/ListingImageModalComponent';
import { EditMerchandiseFormsComponent } from '../organisms/EditMerchandiseFomrsComponent';
import { ImageComponent } from '../atoms/ImageComponent';
import { useContext } from 'react';
import { MerchandiseIsInvalidContext } from '../../Contexts/MerchandiseIsInvalidProvider';
import { MerchandiseModalOpenContext } from '../../Contexts/MerchandiseModalOpenProvider';

export const EditMerchandiseFormComponentWrapper = () => {
  const { modalOpen, imageModalClose, openImage } = useContext(MerchandiseModalOpenContext);
  // MEMO: detailsには、入力が不足している入力項目名が格納される
  const { isInvalid, details } = useContext(MerchandiseIsInvalidContext);

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

      <EditMerchandiseFormsComponent />

      <ListingImageModalComponent
        isOpen={modalOpen}
        handleClose={imageModalClose}
        openImage={openImage}
      >
        <ImageComponent
          src={openImage}
          alt=''
          className='h-[500px] w-[400px] rounded'
        />
      </ListingImageModalComponent>

    </>
  )
};
