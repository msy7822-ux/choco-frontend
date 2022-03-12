import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { DELETE_MERCHANDISE } from '../apollo/queries/delete_merchandise_mutation';

export const useDeleteMerchandise = (merchandiseId) => {
  const router = useRouter();
  const [deleteMerchandiseMutation] = useMutation(DELETE_MERCHANDISE);

  const deleteMerchandise = useCallback(() => {
    deleteMerchandiseMutation({ variables: {
      merchandiseId: merchandiseId
    }}).then((res) => {
      console.log(res);
      router.push('/')
    });
  }, []);

  return { deleteMerchandise: deleteMerchandise }
};
