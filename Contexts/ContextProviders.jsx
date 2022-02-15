import { MerchandiseImagesContextProvider } from './MerchandiseImageProvider';
import { MerchandiseImageModalOpenProvider } from './MerchandiseImageModalOpenProvider';
import { MerchandiseIsInvalidProvider } from './MerchandiseIsInvalidProvider';

export const ContextProviders = ({ children }) => {
  return (
    <MerchandiseIsInvalidProvider>
      <MerchandiseImagesContextProvider>
        <MerchandiseImageModalOpenProvider>
          { children }
        </MerchandiseImageModalOpenProvider>
      </MerchandiseImagesContextProvider>
    </MerchandiseIsInvalidProvider>
  )
}