/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/Layout";
import { useQuery } from '@apollo/client';
import { MYSELF } from '../apollo/queries/myself_query';
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Link } from "@mui/material";
import ReactStars from 'react-stars';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { useSession } from 'next-auth/react';

const mypageListStyle = {
  borderBottom: '1px solid #EBEBEB',
  width: '85%',
  paddingTop: '1rem',
  display: 'flex',
  paddingBottom: 3,
  justifyContent: 'space-between',
};

const Mypage = () => {
  const { status } = useSession();
  const router = useRouter();
  // TODO: pageLoading周りを見直す
  const [pageLoading, setPageLoading] = useState(true);

  const { data, loading } = useQuery(MYSELF, {
    onError: (error) => {
      console.log('errorの内容', error);
      if (error.message === 'ログインが見当たりません。') {
        router.push('/login');
      }
    }
  });

  console.log('fetched user data', data);

  useLayoutEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token === 'undefined' || status === 'unauthorized') {
      router.push('/login')
    }
    setPageLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || pageLoading) return <>Loading...</>;

  return (
    <>
      <Layout>
        <Box sx={{ mt: '2rem' }}>
          {/* プロフィール部分 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: '2rem' }}>
            <img
              src={data?.myself?.image}
              alt='user image'
              style={{
                height: 100,
                weight: 100,
                border: '3px solid #DADADA',
                borderRadius: '50%'
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', ml: '2rem' }}>{data?.myself?.name}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ mr: '1rem' }}>
              <ReactStars count={5} value={data?.myself?.evaluation}/>
            </Box>
            <Link href="#" sx={{ ml: '1rem', mb: '1rem' }}>プロフィールを見る</Link>
          </Box>
          <hr color="#EBEBEB" size="4"/>

          {/* 諸々のメニュー部分 */}
          <ul style={{ mx: 'auto', listStyle: 'none', color: '#5C5C5C' }}>
            <li style={mypageListStyle}>
              いいねした商品
              <Box sx={{ display: 'inline', color: '#5C5C5C' }}>
                <AiOutlineDoubleRight />
              </Box>
            </li>
            <li style={mypageListStyle}>
              閲覧履歴
              <Box sx={{ display: 'inline', color: '#5C5C5C' }}>
                <AiOutlineDoubleRight />
              </Box>
            </li>
            <li style={mypageListStyle}>
              下書き一覧
              <Box sx={{ display: 'inline', color: '#5C5C5C' }}>
                <AiOutlineDoubleRight />
              </Box>
            </li>
            <li style={mypageListStyle}>
              出品した商品一覧
              <Box sx={{ display: 'inline', color: '#5C5C5C' }}>
                <AiOutlineDoubleRight />
              </Box>
            </li>
            <li style={mypageListStyle}>
              購入した商品一覧
              <Box sx={{ display: 'inline', color: '#5C5C5C' }}>
                <AiOutlineDoubleRight />
              </Box>
            </li>
          </ul>
        </Box>
      </Layout>
    </>
  );
};

export default Mypage;
