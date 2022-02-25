import { useFetchMerchandiseInfo } from '../../hooks/useFetchMerchandsieInfo';
import { LikeIconComponent } from '../atoms/LikeIconComponent';
import { CommentIconComponent } from '../atoms/CommentIconComponent';
import { TextComponent } from '../atoms/TextComponent';
import { userIsFavoriteContext } from '../../Contexts/UserIsFavoriteProvider';
import { MerchandiseInfoCommentModalOpenContext } from '../../Contexts/MerchandiseInfoCommentModalOpenProvider';
import { useContext } from 'react';
import { useDoFavorite } from '../../hooks/useDoFavorite';
import { useSession } from 'next-auth/react';

export const MerchandiseLikeCommentComponent = () => {
  const { status } = useSession();
  const {
    isFavorite,
    favoriteToggle,
    unmountFavorite
  } = useContext(userIsFavoriteContext);
  const { description } = useFetchMerchandiseInfo();
  const { commentModalOpen } = useContext(MerchandiseInfoCommentModalOpenContext);

  // unmountのときにいいねをDBにサーバーに反映させる
  useDoFavorite(unmountFavorite.current);

  return (
    <div className='mt-4'>
      <div className='flex border-b-[1px] w-[85%] mx-auto pb-2'>
        <div
          className='flex mr-5'
          onClick={() => {
            if (status === 'authenticated') {
              favoriteToggle();
            }
          }}
        >
          <LikeIconComponent
            className={`${isFavorite ? 'text-[#FA5959]' : 'text-[#9C9C9C]'} text-[20px] mr-1`}
          />
          <TextComponent text='いいね' className='text-[#9C9C9C]' />
        </div>
        <div
          className='flex'
          onClick={() => commentModalOpen()}
        >
          <CommentIconComponent className='text-[20px] text-[#9C9C9C] mr-1' />
          <TextComponent text='コメント' className='text-[#9C9C9C]' />
        </div>
      </div>

      <div className='mx-[8%] mt-3'>
        <TextComponent text='- 商品の説明 -' className='text-[#9C9C9C]' />
        { description }
      </div>
    </div>
  )
};
