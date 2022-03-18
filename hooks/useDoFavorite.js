import { useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FAVORITE_MUTATION } from '../apollo/queries/favorite_mutation';

export const useDoFavorite = (isFavorite) => {
  const [favoriteMutation] = useMutation(FAVORITE_MUTATION);
  const router = useRouter();
  const merchandiseId = parseInt(router.query.id, 10);
  const { status } = useSession();

  useEffect(() => {
    return () => {
      console.log('isFavorite', isFavorite);
      if (status === 'authenticated') {
        favoriteMutation({
          variables: {
            merchandiseId: merchandiseId,
            isFavorite: isFavorite,
          }
        }).then((res) => {
          console.log(res);
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    complete: true
  }
};
