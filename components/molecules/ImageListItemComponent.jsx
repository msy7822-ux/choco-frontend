import { ImageComponent } from '../atoms/ImageComponent';
import { ImageListItemBarComponent } from './ImageListItemBarComponent';

export const ImageListItemComponent = ({ className, src, title, subtitle }) => {
  return (
    <div className={`relative ${className || ''} border`}>
      <ImageComponent
        src={src}
        alt=''
        className='w-full h-full max-h-48'
      />
      <ImageListItemBarComponent
        title={title}
        subtitle={subtitle}
        className={`w-full inline-block bg-[rgba(0,0,0,0.5)] text-white absolute bottom-0 left-0`}
      />
    </div>
  )
};
