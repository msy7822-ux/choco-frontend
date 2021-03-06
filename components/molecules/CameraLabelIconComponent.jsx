import { LabelTextComponent } from "../atoms/LabelTextComponent";
import { CameraIconComponent } from "../atoms/CameraIconComponent";

export const CameraLabelIconComponent = ({
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
      <CameraIconComponent className={iconClasses} />
      <LabelTextComponent
        text='εΊεγγ'
        className={labelClasses}
      />
    </div>
  )
};
