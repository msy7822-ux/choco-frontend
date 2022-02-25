import { LinkComponent } from '../atoms/LinkComponent';
import { HorizontalLineComponent } from '../atoms/HorizontalLineComponent';
import { ImageComponent } from '../atoms/ImageComponent';
import { TextComponent } from '../atoms/TextComponent';
import ReactStars from 'react-stars';

export const MypageTopComponent = ({ myself }) => {
  return (
    <div>
      <div className='flex justify-center'>
        <ImageComponent
          src={myself?.image ? myself.image : ''}
          alt=''
          className='rounded-full w-[90px] mr-9'
        />
        <TextComponent
          text={myself?.name ? myself.name : ''}
          className='leading-[90px]'
        />
      </div>
      <div className='flex justify-center my-5'>
        <ReactStars
          count={5}
          value={myself?.evaluation ? myself.evaluation : 0}
        />
        <LinkComponent
          href='/'
          className='text-[#4673ec] ml-6 underline'
        >
          {myself ? 'プロフィールを見る' : ''}
        </LinkComponent>
      </div>

      <HorizontalLineComponent />
    </div>
  )
}