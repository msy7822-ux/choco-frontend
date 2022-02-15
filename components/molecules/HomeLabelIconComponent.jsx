import { HomeIconComponent } from '../atoms/HomeIconComponent';
import { LabelTextComponent } from '../atoms/LabelTextComponent';

export const HomeLabelIconComponent = ({
  onClick,
  className,
  labelClasses,
  iconClasses,
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
    >
      <HomeIconComponent className={iconClasses} />
      <LabelTextComponent
        text='ホーム'
        className={labelClasses}
      />
    </div>
  )
};
