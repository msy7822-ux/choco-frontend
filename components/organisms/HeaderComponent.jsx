import { HorizontalLineComponent } from "../atoms/HorizontalLineComponent";
import { AppIconComponent } from "../molecules/AppIconComponent";

export const HeaderComponent = () => {
  return (
    <>
      <AppIconComponent
        titleClasses='text-[3rem] text-[#848484] font-serif'
        iconClasses='h-[50px] mt-[11px] mr-[10px]'
      />
      <HorizontalLineComponent
        className='text-[#848484] w-[80%] m-auto'
      />
    </>
  );
};
