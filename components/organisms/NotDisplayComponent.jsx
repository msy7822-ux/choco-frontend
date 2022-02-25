import { ImageComponent } from "../atoms/ImageComponent";
import { TextComponent } from "../atoms/TextComponent";

export const NotDisplayComponent = ({ className }) => {
  return (
    <div className={`${className || ''}`}>
      <ImageComponent
        src="/warning.svg"
        alt='warning'
        className='h-[64px] w-[64px] mt-0 mb-[3rem] mx-auto'
      />
      <TextComponent
        text={`※本サービスは、現時点でタブレットおよびデスクトップに対応しておりません。\nお持ちのスマートフォンでご利用ください。`}
        className='font-bold text-[1rem] text-center text-[#f14d4d]'
      />
    </div>
  )
};
