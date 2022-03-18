import { LeftAllowIconComponent } from '../atoms/LeftAllowIconComponent';
import { RightArrowIconComponent } from '../atoms/RightAllowIconComponent';
import { useFetchMerchandiseInfo } from '../../hooks/useFetchMerchandiseInfo';
import { ImageComponent } from '../atoms/ImageComponent';

const scrollStyleWrapperClasses = 'snap-x mx-auto snap-mandatory h-[200px] flex w-96 overflow-scroll';
const scrollStyleClasses = 'snap-always snap-center w-96 flex-shrink-0 h-full flex items-center justify-center';

export const MerchandiseImagesSliderComponent  = () => {
  const { images } = useFetchMerchandiseInfo();

  return (
    <div className='flex'>
      <LeftAllowIconComponent className='h-[200px] mx-5 leading-[200px] text-[#c2baba] text-lg' />
      <div className={scrollStyleWrapperClasses}>
        {images?.length > 0 &&
          images.map((image, key) => {
            return (
              <div key={key} className={scrollStyleClasses}>
                <ImageComponent
                  src={image.url}
                  alt=''
                  className='h-[180px] w-[70%] border rounded'
                />
              </div>
            )
          })
        }

        {images?.length === 0 &&
          <ImageComponent
            src='/noimage.png'
            alt=''
            className='h-[180px] w-[180px] mx-auto border rounded'
          />
        }
      </div>
      <RightArrowIconComponent className='h-[200px] mx-5 leading-[200px]  text-[#c2baba] text-lg' />
    </div>
  )
};
