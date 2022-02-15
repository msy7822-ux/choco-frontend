import { HomeLabelIconComponent } from '../molecules/HomeLabelIconComponent';
import { PersonLabelIconComponent } from '../molecules/PersonLabelIconComponent';
import { CameraLabelIconComponent } from '../molecules/CameraLabelIconComponent';
import { BellLabelIconComponent } from '../molecules/BellLabelIconComponent';

const bottomNavIconClasses = 'text-[#818181] text-[35px]';
const bottomNavMyPageClasses = `${bottomNavIconClasses} ml-3`;
const bottomNavListingClasses = `${bottomNavIconClasses} ml-1`;
const bottomNavNotifyClasses = `${bottomNavIconClasses} ml-1.5`;
const labelTextStyleClasses = 'text-[12px] text-[#818181] text-center';

export const BottomNavComponent = ({
  handleClickMypageIcon,
  handleClickHomeIcon,
  handleClickBellIcon,
  handleClickCameraIcon
}) => {
  return (
    <>
      <HomeLabelIconComponent
        onClick={handleClickHomeIcon}
        className={labelTextStyleClasses}
        iconClasses={bottomNavIconClasses}
      />
      <BellLabelIconComponent
        onClick={handleClickBellIcon}
        className={labelTextStyleClasses}
        iconClasses={bottomNavNotifyClasses}
      />
      <CameraLabelIconComponent
        onClick={handleClickCameraIcon}
        className={labelTextStyleClasses}
        iconClasses={bottomNavListingClasses}
      />
      <PersonLabelIconComponent
        onClick={handleClickMypageIcon}
        className={labelTextStyleClasses}
        iconClasses={bottomNavMyPageClasses}
      />
    </>
  );
};