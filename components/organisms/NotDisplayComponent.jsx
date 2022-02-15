import { ImageComponent } from "../atoms/ImageComponent";
import { TextComponent } from "../atoms/TextComponent";

export const NotDisplayComponent = () => {
  return (
    <>
      <ImageComponent
        src="/warning.svg"
        alt='warning'
        className='h-[32px] w-[32px] mt-0 mb-[3rem] mx-auto'
      />
      <TextComponent className='font-bold text-[2rem]'>
        ※本サービスは、現時点でタブレットおよびデスクトップに対応しておりません。<br /> お持ちのスマートフォンでご利用ください。
      </TextComponent>
    </>
  )
};
