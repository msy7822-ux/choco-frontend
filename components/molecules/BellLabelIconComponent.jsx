import { LabelTextComponent } from "../atoms/LabelTextComponent";
import { BellIconComponent } from "../atoms/BellIconComponent";

export const BellLabelIconComponent = ({
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
      <BellIconComponent className={iconClasses} />
      <LabelTextComponent
        text='お知らせ'
        className={labelClasses}
      />
    </div>
  )
};
