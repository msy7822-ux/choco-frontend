import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { apolloSsrClient } from '../apollo/config';
import { useQuery } from '@apollo/client';
import { MERCHANDISE_DETAIL } from '../apollo/queries/merchandise_detail_query';
import { FAVORITE_QUERY } from '../apollo/queries/current_user_favorite_query';
import { userIsFavoriteContext } from '../Contexts/UserIsFavoriteProvider';
import { MerchandiseImagesContext } from '../Contexts/MerchandiseImageProvider';
import { useSession } from 'next-auth/react';

export const useFetchMerchandiseInfo = () => {
  const { isFavorite, setIsFavorite } = useContext(userIsFavoriteContext);
  const { setImages } = useContext(MerchandiseImagesContext);
  const [sellerIsMe, setSellerIsMe] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();
  const merchandiseId = parseInt(router.query.id, 10);

  const { loading: merchandiseLoading, data, error } = useQuery(MERCHANDISE_DETAIL, {
    variables: { id: merchandiseId },
    ssr: true,
    client: apolloSsrClient,
    onCompleted: (data) => {
      setSellerIsMe(data?.merchandiseDetail?.seller?.email === session?.user?.email);
      const imageUrls = data?.merchandiseDetail?.merchandiseImages.map((image) => { return image.url })
      setImages(imageUrls);
    }
  });

  useQuery(FAVORITE_QUERY, {
    variables: { merchandiseId: merchandiseId },
    fetchPolicy: 'no-cache',
    ssr: true,
    client: apolloSsrClient,
    onCompleted: (data) => {
      if (data?.favorite !== null) {
        setIsFavorite(true);
      }
    }
  });

  if (merchandiseLoading) return <>loading...</>;
  if (error) return <>Error!!!</>

  return {
    id: merchandiseId,
    title: data.merchandiseDetail.title,
    description: data.merchandiseDetail.description,
    price: data.merchandiseDetail.price,
    images: data.merchandiseDetail.merchandiseImages,
    department: data.merchandiseDetail.dividedDepartment.department,
    condition: data.merchandiseDetail.condition,
    seller: data.merchandiseDetail.seller,
    isFavorite: isFavorite,
    sellerIsMe: sellerIsMe
  }
};
