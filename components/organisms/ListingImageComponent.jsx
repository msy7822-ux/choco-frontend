import { ImageComponent } from '../atoms/ImageComponent';
import { ImageUploaderComponent } from '../molecules/ImageUploadComponent';
import { PhotoIconComponent } from '../atoms/PhotoIconComponent';
import { useContext } from 'react';
import { MerchandiseImagesContext } from '../../Contexts/MerchandiseImageProvider';
import { MerchandiseImagesModalOpenContext } from '../../Contexts/MerchandiseImageModalOpenProvider';

const ImageDisplayComponentClasses = 'text-[35px] border box-content p-3 mr-3 rounded-md text-[#848484]'

export const ListingImageComponent = ({ className }) => {
  const { images } = useContext(MerchandiseImagesContext);
  const { imageModalOpen } = useContext(MerchandiseImagesModalOpenContext);

  // FIXME: jsxでfor文などを即時関数の中で記述すると、一度しか実行されないため、アイコンと画像との表示の切り替えが難しくなるので一旦ベタがき
  return (
    <ul className={`flex ${className}`}>
      <li>
        {!images[0]
          ? <PhotoIconComponent className={ImageDisplayComponentClasses} />
          : <div onClick={() => imageModalOpen(images[0])}>
              <ImageComponent
                src={images[0]}
                alt=''
                className='h-[60px] w-[60px] border mr-3 rounded-md text-[#848484]'
              />
            </div>
        }
      </li>
      <li>
        {!images[1]
          ? <PhotoIconComponent className={ImageDisplayComponentClasses} />
          : <div onClick={() => imageModalOpen(images[1])}>
              <ImageComponent
                src={images[1]}
                alt=''
                className='h-[60px] w-[60px] border mr-3 rounded-md text-[#848484]'
              />
            </div>
        }
      </li>
      <li>
        {!images[2]
          ? <PhotoIconComponent className={ImageDisplayComponentClasses} />
          : <div onClick={() => imageModalOpen(images[2])}>
              <ImageComponent
                src={images[2]}
                alt=''
                className='h-[60px] w-[60px] border mr-3 rounded-md text-[#848484]'
              />
            </div>
        }
      </li>
      <li>
        {!images[3]
          ? <ImageUploaderComponent />
          : <div onClick={() => imageModalOpen(images[3])}>
              <ImageComponent
                src={images[3]}
                alt=''
                className='h-[60px] w-[60px] border rounded-md text-[#848484]'
              />
            </div>
        }
      </li>
    </ul>
  )
};
