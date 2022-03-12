// templateをうまく使ってもう少しpagesを薄くしたい
import { LayoutComponent } from '../../components/templates/LayoutComponent';
import { MerchandiseInfoComponent } from '../../components/organisms/MerchandiseInfoComponent';
import { MerchandiseImagesSliderComponent } from '../../components/organisms/MerchandiseImagesSliderComponent';
import { MerchandiseLikeCommentComponent } from '../../components/organisms/MerchandiseLikeCommentComponent';
import { MerchandiseInfoCommentModalComponent } from '../../components/organisms/MerchandiseInfoCommentModalComponent';
import { ButtonComponent } from '../../components/atoms/ButtonComponent';
import { useSession } from 'next-auth/react';
import { useFetchMerchandiseInfo } from '../../hooks/useFetchMerchandiseInfo';
import { useRouter } from 'next/router';
import { useDeleteMerchandise } from '../../hooks/useDeleteMerchandise';

const purchaseBtnClasses = 'mx-[8%] select-none w-[90%] text-white font-bold py-2 px-4 rounded-full';
const purchaseBtnColor = (status) => {
  return status === 'authenticated' ? 'bg-blue-500' : 'bg-[gray] disabled:opacity-75 ';
};
const deleteBtnColor = 'bg-red-500';

const MerchandiseDetail = () => {
  const { status } = useSession();
  const router = useRouter();
  const { sellerIsMe, id } = useFetchMerchandiseInfo();
  const { deleteMerchandise } = useDeleteMerchandise(id);

  return (
    <>
      <LayoutComponent>
        <MerchandiseImagesSliderComponent />
        <MerchandiseInfoComponent />
        <MerchandiseLikeCommentComponent />
        <ButtonComponent
          className={`${status === 'authenticated' && sellerIsMe ? 'mt-8' : 'hidden'} ${purchaseBtnClasses} ${purchaseBtnColor(status)}`}
          onClick={() => router.push(`/merchandises/${id}/edit`)}
        >
          編集する
        </ButtonComponent>
        <ButtonComponent
          className={`${status === 'authenticated' && sellerIsMe ? 'mt-3' : 'hidden'} ${purchaseBtnClasses} ${deleteBtnColor}`}
          onClick={() => { deleteMerchandise() }}
        >
          削除する
        </ButtonComponent>

        <ButtonComponent
          className={`${status === 'authenticated' && !sellerIsMe ? 'mt-8' : 'hidden'} ${purchaseBtnClasses} ${purchaseBtnColor(status)}`}
        >
          購入する
        </ButtonComponent>

        <ButtonComponent
          className={`${status === 'unauthenticated' ? 'mt-8' : 'hidden'} ${purchaseBtnClasses} ${purchaseBtnColor(status)}`}
          onClick={() => router.push('/login')}
        >
          ログインしてください
        </ButtonComponent>
        <MerchandiseInfoCommentModalComponent />
      </LayoutComponent>
    </>
  )
};

export default MerchandiseDetail;
