/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/Layout";
import { useQuery } from "@apollo/client";
import { MERCHANDISES } from "../apollo/queries/merchandises_query";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
} from "@mui/material";

export default function Home() {
  const router = useRouter();
  const [lastCursor, setLastCursor] = useState('null');
  const [merchandises, setMerchandises] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const {ref, inView} = useInView();

  const handleOnCompleted = (data) => {
    if (data?.merchandises?.edges) {
      const fetchedMerchandiseIds = data.merchandises.edges.map((merch) => { return merch.node.id });
      const merchandisesIds = merchandises.map((merch) => { return merch?.node?.id });
      if (merchandisesIds.includes(fetchedMerchandiseIds[0])) {// フェッチデータが重複するのを未然に防ぐ
        return;
      }
      setMerchandises([...merchandises, data.merchandises.edges].flat());
      setHasNextPage(data.merchandises.pageInfo?.hasNextPage);
    }
  };

  const { data, fetchMore, refetch } = useQuery(
    MERCHANDISES,
    {
      variables: { endCursor: lastCursor },
      onCompleted: () => handleOnCompleted(data),
    },
  );

  const fetchMorePage = async () => {
    setLastCursor(data?.merchandises?.pageInfo?.endCursor);
    await fetchMore(MERCHANDISES, {
      variables: { endCursor: lastCursor },
      onCompleted: () => handleOnCompleted(data),
    });
  };

  // マウント時にフェッチする
  useEffect(() => {
    refetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) {
      fetchMorePage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Layout>
        <Box sx={{ mx: 1 }}>
          <ImageList cols={2}>
            {merchandises !== [] &&
              merchandises.map((merchandise, key) => {
                return (
                  <ImageListItem
                    key={key}
                    onClick={() => router.push(`/merchandises/detail?id=${merchandise.node.id}`)}
                  >
                    <img
                      // トップページには複数の画像の一枚目を掲載する
                      src={merchandise.node.merchandiseImages.length !== 0 ? merchandise.node.merchandiseImages[0].url : '/noimage.png'}
                      alt={merchandise.node.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{ padding: 0, margin: 0 }}
                      title={`No.${merchandise.node.id} ${merchandise.node.title}`}
                      subtitle={`¥${merchandise.node.price}`}
                    />
                  </ImageListItem>
                );
              })
            }
            <Box ref={ref}/>
          </ImageList>
          <Button
            disabled={!hasNextPage}
            onClick={fetchMorePage}
            variant="contained"
          >
            さらに読み込む
          </Button>
          <Box sx={{ mb: '6rem' }}/>
        </Box>
      </Layout>
    </>
  )
}

