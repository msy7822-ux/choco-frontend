/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import { LayoutComponent } from '../../components/templates/LayoutComponent';
import { useQuery, useMutation } from "@apollo/client";
import { Box, Button } from "@mui/material";
import { FaHeart, FaComments } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { MERCHANDISE_DETAIL } from "../../apollo/queries/merchandise_detail_query";
import { FAVORITE_MUTATION } from '../../apollo/queries/favorite_mutation';
import { FAVORITE_QUERY } from '../../apollo/queries/current_user_favorite_query'

import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MerchandiseDetail = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const merchandiseId = parseInt(router.query.id, 10);
  const [isFavorited, setIsFavorited] = useState(false);

  const { loading: merchandiseLoading, data, error } = useQuery(MERCHANDISE_DETAIL, {
    variables: { id: merchandiseId }
  });

  useQuery(FAVORITE_QUERY, {
    variables: { merchandiseId: merchandiseId },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log('フェッチ直後のデータ ->', data)
      if (data.favorite) {
        setIsFavorited(true)
        unmountFavorite.current = true
      }
    }
  });

  const [favoriteMutation] = useMutation(FAVORITE_MUTATION);

  const isSeller = data?.merchandiseDetail?.seller?.email === session?.user?.email;
  const haveMerchandiseImage = data?.merchandiseDetail?.merchandiseImages.length !== 0;

  // アンマウント時にいいねしたかどうかの最終的な結果をサーバーにリクエストする
  useEffect(() => {
    return () => {
      favoriteMutation({
        variables: {
          merchandiseId: merchandiseId,
          isFavorite: unmountFavorite.current,
        }
      }).then((res) => {
        console.log(res);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // いいねボタンをクリックしたときの挙動
  const onClickFavorite = () => {
    if (status === 'unauthorized' || !(session?.user)) {
      router.push('/login');
      return;
    }

    unmountFavorite.current = !isFavorited
    setIsFavorited(!isFavorited);
  }

  if (merchandiseLoading) return <p>Loading...</p>;
  if (error) return <p>Something Wrong..!</p>

  return (
    <>
      <LayoutComponent>
        {/* 画像スライダー */}
          <Box sx={{ mt: '1rem', mb: '2rem', mx: '2rem' }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slideToClickedSlide={true}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
            >
              {/* 出品時に画像がアップされている場合 */}
              {data?.merchandiseDetail && haveMerchandiseImage &&
                data.merchandiseDetail.merchandiseImages.map((image, key) => {
                  return (
                    <SwiperSlide
                      key={key}
                      style={{
                        textAlign: 'center',
                        mb: '1rem'
                      }}
                    >
                      <img
                        src={image.url}
                        alt={data.merchandiseDetail.title}
                        style={{
                          width: '40%',
                          border: '1px solid #818181',
                          borderRadius: 5
                        }}
                      />
                    </SwiperSlide>
                  );
                })
              }
              {/* 出品時に画像がアップされていない場合 */}
              {data?.merchandiseDetail && !haveMerchandiseImage &&
                <Box style={{ textAlign: 'center', mb: '1rem' }}>
                  <img
                    src={'/noimage.png'}
                    alt={data.merchandiseDetail.title}
                    style={{
                      width: '40%',
                      border: '1px solid #818181',
                      borderRadius: 5
                    }}
                  />
                </Box>
              }
            </Swiper>
          </Box>

        {/* 商品タイトル、商品価格、学部 */}
        <Box
          sx={{
            mt: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            px: '1.2rem'
          }}
        >
          <Box>
            <Box sx={{ fontSize: '1.2rem' }}>
              {data?.merchandiseDetail?.title}
            </Box>
            <Box sx={{ fontSize: '1.5rem' }}>
              ¥{data?.merchandiseDetail?.price}
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: '#7D7D7D',
              color: '#FFF',
              borderRadius: 1,
              height: '1rem',
              lineHeight: '1rem',
              px: 2,
              ml: '1rem',
              py: 1,
              mt: 2,
              whiteSpace: 'nowrap'
            }}
          >
            {data?.merchandiseDetail?.dividedDepartment?.department?.name}
          </Box>
        </Box>

        {/* いいね、コメント */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '2rem',
            borderBottom: '1px solid #EBEBEB',
            width: '90%',
            mx: 'auto'
          }}
        >
          {/* いいね */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mr: '4rem'
            }}
            onClick={() => {
              onClickFavorite();
            }}
          >
            <Box
              sx={{
                mt: 1,
                mr: 1
              }}
            >
              <FaHeart color={ isFavorited ? "#FA5959" : "#EBEBEB" } size='20' />
              {/* <FaHeart color={ isFavorited.current ? "#FA5959" : "#EBEBEB" } size='20' /> */}
            </Box>

            <Box sx={{ fontSize: 20, }}>
              いいね {5}件
            </Box>
          </Box>

          {/* コメント */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ mt: 1, mr: 1 }}>
              <FaComments color="#9C9C9C" size='20' />
            </Box>
            <Box sx={{ fontSize: 20 }}>コメント</Box>
          </Box>
        </Box>

        {/* 商品の説明 */}
        <Box sx={{ mt: '1rem', mx: '1.2rem' }}>
          <Box>商品の説明</Box>
          <Box>{data?.merchandiseDetail?.description}</Box>
        </Box>

        {/* 購入ボタン or 編集ボタン */}
        <Box sx={{ mt: '2rem', mx: '1.2rem', }}>
        {isSeller &&
          <Button
          variant="contained"
          sx={{
            bgcolor: '#FA5959',
            width: '100%'
          }}
        >
          編集する
        </Button>
        }

        {!isSeller &&
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FA5959',
              width: '100%'
            }}
          >
            購入する
          </Button>
        }
        </Box>
        <Box sx={{ mb: '7rem' }} />
      </LayoutComponent>
    </>
  );
}

export default MerchandiseDetail;
