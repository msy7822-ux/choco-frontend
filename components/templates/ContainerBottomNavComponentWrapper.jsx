import { BottomNavComponentWrapper } from "./BottomNavComponentWrapper";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const ContainerBottomNavComponentWrapper = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleClickMypageIcon = () => {
    if (status === 'unauthenticated') {
      router.replace('/login');
    } else {
      router.replace('/mypage');
    }
  };

  const handleClickHomeIcon = () => {
    router.replace('/');
  };

  const handleClickBellIcon = () => {
    console.log('未実装です');
  };

  const handleClickCameraIcon = () => {
    router.replace('/listing');
  }

  return (
    <BottomNavComponentWrapper
        handleClickMypageIcon={handleClickMypageIcon}
        handleClickHomeIcon={handleClickHomeIcon}
        handleClickBellIcon={handleClickBellIcon}
        handleClickCameraIcon={handleClickCameraIcon}
    />
  )
};
