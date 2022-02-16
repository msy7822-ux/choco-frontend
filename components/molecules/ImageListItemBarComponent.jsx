import { LabelTextComponent } from '../atoms/LabelTextComponent';

export const ImageListItemBarComponent = ({ title, subtitle, className }) => {
  return (
    <div className={`${className || ''}`}>
      <LabelTextComponent text={title} className='ml-3' />
      <LabelTextComponent text={subtitle}  className='ml-3' />
    </div>
  )
};
