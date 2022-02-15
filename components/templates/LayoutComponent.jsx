import { ContainerBottomNavComponentWrapper } from "./ContainerBottomNavComponentWrapper";
import { ContainerHeaderComponentWrapper } from "./ContainerHeaderComponentWrapper";
import HtmlHeadComponent from '../atoms/HtmlHeadComponent';
// import { useMediaQuery } from "react-responsive";
// import { useRouter } from 'next/router';

export const LayoutComponent = ({ children, className }) => {
  // const router = useRouter();
  // const isMobileScreen = useMediaQuery({ query: '(max-width: 400px)'});

  // if (!isMobileScreen) return (
  // )

  return (
    <div className={`p-0 m-0 ${className || ''}`} >
      <HtmlHeadComponent />
      <ContainerHeaderComponentWrapper />
      {/* ここのmarginTopのみを持ったdivタグは、Headerとchildrenとの被りを防ぐために用意 */}
      <div style={{marginTop: '7rem'}} />
      { children }
      {/* ここのmarginTopのみを持ったdivタグは、BottomNavigationとchildrenとの被りを防ぐために用意 */}
      <div style={{marginTop: '7rem'}} />
      <ContainerBottomNavComponentWrapper />
    </div>
  );
}