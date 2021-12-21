/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/Layout";
import { useQuery } from "@apollo/client";
import { MERCHANDISES } from "../apollo/queries/merchandises_query";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

export default function Home() {
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
                  <ImageListItem key={key}>
                    <img
                      src={merchandise.node.image}
                      alt={merchandise.node.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{ padding: 0, margin: 0 }}
                      title={merchandise.node.title}
                      subtitle={`¥4000 ${merchandise.node.id}`}
                    />
                  </ImageListItem>
                );
              })
            }
            <Box ref={ref}/>
          </ImageList>
          <button disabled={!hasNextPage} onClick={fetchMorePage}>さらに読み込む</button>
          <Box sx={{ mb: '6rem' }}/>
        </Box>
      </Layout>
    </>
  )
}

