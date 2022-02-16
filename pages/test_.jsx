// このファイルは後で消す
import { ListingMerchandisesComponent } from '../components/organisms/ListingMerchandisesComponent';
import { LayoutComponent } from '../components/templates/LayoutComponent';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Test_ = () => {
  return (
    <LayoutComponent>
      <ListingMerchandisesComponent/>
    </LayoutComponent>
  )
};

export default Test_;