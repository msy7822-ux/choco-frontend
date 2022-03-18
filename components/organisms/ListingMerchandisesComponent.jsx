import { ImageListComponent } from '../molecules/ImageListComponent';
import { ImageListItemComponent } from '../molecules/ImageListItemComponent';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useFetchMerchandises } from '../../hooks/useFetchMerchandises';
import { isEmptyArray } from '../../utils/functions/isEmptyArray';
import { LinkComponent } from '../atoms/LinkComponent';


export const ListingMerchandisesComponent = ({ className }) => {
  const {ref, inView} = useInView();
  const { merchandises, fetchMorePage, hasNextPage } = useFetchMerchandises();

  useEffect(() => {
    if (inView && hasNextPage) {
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
              <LinkComponent key={key} href={`/merchandises/${merchandise.node.id}`}>
                <ImageListItemComponent
                  src={isEmptyArray(merchandise?.node?.merchandiseImages) ? '/noimage.png' : merchandise?.node?.merchandiseImages[0]?.url}
                  title={merchandise?.node?.title}
                  subtitle={`￥${merchandise?.node?.price}`}
                  className=' h-full'
                />
              </LinkComponent>
            )
          })
        }
        <div ref={ref} />
      </ImageListComponent>
    </div>
  )
};
