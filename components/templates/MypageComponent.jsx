import { MypageTopComponent } from '../organisms/MypageTopComponent';
import { useFetchLoginUserInfo } from '../../hooks/useFetchLoginUserInfo';
import { MypageMenuComponent } from '../organisms/MypageMenuComponent';

export const MypageComponent = () => {
  // TODO: ここのフェッチをssrにしたい
  const { myself } = useFetchLoginUserInfo()

  return (
    <div>
      <MypageTopComponent myself={myself} />
      <MypageMenuComponent className='mt-9' />
    </div>
  )
};
