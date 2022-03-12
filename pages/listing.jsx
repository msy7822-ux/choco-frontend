import { LayoutComponent } from '../components/templates/LayoutComponent';
import { ListingFormsComponentWrapper } from '../components/templates/ListingFormsComponentWrapper';
import { useRecoilState } from 'recoil';
import { countState } from '../utils/lib/recoil/atoms/atoms';
import { useEffect } from 'react';

const Listing = () => {
  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);

  //count increment処理
  const increment = c => {
    return c + 1;
  }

  useEffect(() => {
    console.log('count',  count);
  }, [count])


  return(
    <LayoutComponent>
      <ListingFormsComponentWrapper />
    </LayoutComponent>
  )
};

export default Listing;
