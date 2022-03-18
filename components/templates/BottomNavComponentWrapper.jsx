import { BottomNavComponent } from "../organisms/BottomNavComponent";

const BottomNavComponentWrapperClasses = 'fixed flex bg-white justify-around bottom-0 left-0 right-0 pt-[20px] pb-[12px] border-t border-t-[#F1EFEE] text-center'

export const BottomNavComponentWrapper = ({
  handleClickMypageIcon,
  handleClickHomeIcon,
  handleClickBellIcon,
  handleClickCameraIcon
}) => {

  return (
    <div className={BottomNavComponentWrapperClasses}>
      <BottomNavComponent
        handleClickMypageIcon={handleClickMypageIcon}
        handleClickHomeIcon={handleClickHomeIcon}
        handleClickBellIcon={handleClickBellIcon}
        handleClickCameraIcon={handleClickCameraIcon}
      />
    </div>
  )
}