import { PersonIconComponent } from '../atoms/PersonIconComponent';
import { LabelTextComponent } from '../atoms/LabelTextComponent';

export const PersonLabelIconComponent = ({
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
      <PersonIconComponent className={iconClasses} />
      <LabelTextComponent
        text='マイページ'
        className={labelClasses}
        />
    </div>
  )
};
