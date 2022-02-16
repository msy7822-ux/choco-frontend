import { ImageListComponent } from '../molecules/ImageListComponent';
import { ImageListItemComponent } from '../molecules/ImageListItemComponent';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useFetchMerchandises } from '../../hooks/useFetchMerchandises';
import { isEmptyArray } from '../../utils/functions/isEmptyArray';

export const ListingMerchandisesComponent = ({ className }) => {
  const {ref, inView} = useInView();
  // TODO: この関数はレンダリング毎に呼び出されているので修正したい
  const { merchandises, refetch, fetchMorePage } = useFetchMerchandises();

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
    <div className={className}>
      <ImageListComponent className='px-2'>
        {merchandises !== [] &&
          merchandises.map((merchandise, key) => {
            return (
              <ImageListItemComponent
                key={key}
                src={isEmptyArray(merchandise?.node?.merchandiseImages) ? '/noimage.png' : merchandise?.node?.merchandiseImages[0]?.url}
                title={merchandise?.node?.title}
                subtitle={`￥${merchandise?.node?.price}`}
                className='m-1'
              />
            )
          })
        }
        <div ref={ref} />
      </ImageListComponent>
    </div>
  )
};
