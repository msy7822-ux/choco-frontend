import { HeaderComponent } from '../organisms/HeaderComponent';

const HeaderComponentWrapperClasses = 'fixed top-0 left-0 right-0 bg-white z-[1000] w-[100%] pt-[1rem] pb-[0.5rem]'

export const HeaderComponentWrapper = ({ handleClickHeader }) => {
  return (
    <div
      onClick={handleClickHeader}
      className={HeaderComponentWrapperClasses}
    >
      <HeaderComponent />
    </div>
  )
}