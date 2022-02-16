import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { MERCHANDISES } from '../apollo/queries/merchandises_query';

export const useFetchMerchandises = () => {
  // TODO: この関数はレンダリング毎に呼び出されているので修正したい
  const [lastCursor, setLastCursor] = useState('null');
  const [merchandises, setMerchandises] = useState([]);

  const handleOnCompleted = (data) => {
    if (data?.merchandises?.edges) {
      const fetchedMerchandiseIds = data.merchandises.edges.map((merchandise) => { return merchandise.node.id });
      const merchandisesIds = merchandises.map((merchandise) => { return merchandise?.node?.id });
      // フェッチデータが重複するのを未然に防ぐ
      if (merchandisesIds.includes(fetchedMerchandiseIds[0])) {
        return;
      }
      setMerchandises([...merchandises, data.merchandises.edges].flat());
    }
  };

  const { data, fetchMore, refetch } = useQuery(
    MERCHANDISES,
    {
      variables: { endCursor: lastCursor },
      notifyOnNetworkStatusChange: true,
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


  return {
    merchandises: merchandises,
    refetch: refetch,
    fetchMorePage: fetchMorePage
  };
};

