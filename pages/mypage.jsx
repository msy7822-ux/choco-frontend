import { LayoutComponent } from '../components/templates/LayoutComponent';
import { useSession } from 'next-auth/react';
import { MypageComponent } from '../components/templates/MypageComponent';
import { useRouter } from 'next/router';

const Mypage = () => {
  const { status } = useSession();
  const router = useRouter()

  if (status === 'unauthorized') { router.push('/login') }
  if (status === 'loading') return <>Loading...</>;

  return (
    <LayoutComponent>
      <MypageComponent />
    </LayoutComponent>
  );
};

export default Mypage;
