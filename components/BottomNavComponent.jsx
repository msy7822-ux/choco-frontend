import { useSession } from "next-auth/react";
import { AiFillHome } from 'react-icons/ai';
import { BsBellFill, BsFillPersonFill } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';
import Router, { useRouter } from "next/router";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box
} from "@mui/material";

export const BottomNavComponent = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleClickMypageIcon = () => {
    if (status === 'unauthenticated') {
      router.replace('/login');
    } else {
      router.replace('/mypage');
    }
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          pt: '1rem',
          pb: '0.5rem',
          bgcolor: '#FFF',
          borderTop: '1px solid #E5E5E5'
        }}
      >
        <BottomNavigation mt="1.2rem" showLabels>
          <BottomNavigationAction
            label="ホーム"
            icon={<AiFillHome color="#818181" size="35" />}
            onClick={() => {
              router.replace('/');
            }}
          />
          <BottomNavigationAction
            label="お知らせ"
            icon={<BsBellFill color="#818181" size="35" />}
          />
          <BottomNavigationAction
            label="出品"
            icon={<FaCamera color="#818181" size="35" />}
          />
          <BottomNavigationAction
            label="マイページ"
            icon={ <BsFillPersonFill color="#818181" size="35" /> }
            onClick={handleClickMypageIcon}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};