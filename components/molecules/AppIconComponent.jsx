import { ImageComponent } from "../atoms/ImageComponent";
import { TextComponent } from '../atoms/TextComponent';

export const AppIconComponent = ({
  iconClasses,
  titleClasses,
  className
}) => {
  return (
    <>
      {/* ここでは、「Header内の要素を横並びにするもの」がHeaderであるためdivタグで囲う */}
      <div className={`flex justify-center ${className || ''}`}>
        <ImageComponent
          src="/danball_icon.svg"
          alt="choco icon"
          className={iconClasses}
        />
        <TextComponent
          className={titleClasses}
          text='Choco'
        />
      </div>
    </>
  )
};
