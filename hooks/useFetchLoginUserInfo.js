import { useQuery } from '@apollo/client';
import { MYSELF } from '../apollo/queries/myself_query';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export const useFetchLoginUserInfo = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();
  const { status } = useSession()

  const { data, loading } = useQuery(MYSELF, {
    fetchPolicy: 'network-only',
    onError: (error) => {
      console.log('errorの内容', error);
      if (error.message === 'ログインが見当たりません。') {
        router.push('/login');
      }
    }
  });

  useLayoutEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token === 'undefined' || status === 'unauthorized') {
      router.push('/login')
    }
    setPageLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || pageLoading) return <>Loading...</>;
  return { myself: data?.myself };
};
