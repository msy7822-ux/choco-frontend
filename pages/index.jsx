import { LayoutComponent } from '../components/templates/LayoutComponent';
import { ListingMerchandisesComponent } from '../components/organisms/ListingMerchandisesComponent';

export default function Home() {
  return (
    <>
      <LayoutComponent>
        <ListingMerchandisesComponent />
      </LayoutComponent>
    </>
  )
}

