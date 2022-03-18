import { ContainerBottomNavComponentWrapper } from "./ContainerBottomNavComponentWrapper";
import { ContainerHeaderComponentWrapper } from "./ContainerHeaderComponentWrapper";
import HtmlHeadComponent from '../atoms/HtmlHeadComponent';
import { useMediaQuery } from "react-responsive";
import { NotDisplayComponent } from '../organisms/NotDisplayComponent';

export const LayoutComponent = ({ children, className }) => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 450px)'});

  // TODO: ここのロジックは別に切り出したい
  if (!isMobileScreen) {
    return <NotDisplayComponent className='mt-[20%]' />;
  }

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