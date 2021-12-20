import { BottomNavComponent } from './BottomNavComponent';
import { useMediaQuery } from "react-responsive";
import { useRouter } from 'next/router';
import { Header } from './Header';
import { Container } from '@mui/material';
import HeadComponent from './HeadComponent';

export const Layout = ({ children }) => {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: '(max-width: 400px)'});

  // if (!isMobileScreen) return (
  //   <Box
  //     w="100%"
  //     textAlign="center"
  //     mt="10rem"
  //   >
  //     <Image
  //       src="/warning.svg"
  //       alt='warning'
  //       h="32"
  //       w="32"
  //       mx="auto"
  //       mb="3rem"
  //     />
  //     <Text fontWeight="bold" fontSize="2rem">
  //       ※本サービスは、現時点でタブレットおよびデスクトップに対応しておりません。<br /> お持ちのスマートフォンでご利用ください。
  //     </Text>
  //   </Box>
  // )


  return (
    <Container sx={{ p: 0, m: 0 }} >
      <HeadComponent />
      <Header />
      { children }
      <BottomNavComponent />
    </Container>
  );
}