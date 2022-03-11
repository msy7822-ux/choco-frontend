import { MerchandiseImagesContextProvider } from './MerchandiseImageProvider';
import { MerchandiseModalOpenProvider } from './MerchandiseModalOpenProvider';
import { MerchandiseIsInvalidProvider } from './MerchandiseIsInvalidProvider';
import { UserIsFavoriteProvider } from './UserIsFavoriteProvider';
import { MerchandiseInfoCommentModalOpenProvider } from './ModalOpenProvider';

export const ContextProviders = ({ children }) => {
  return (
    <MerchandiseIsInvalidProvider>
      <MerchandiseImagesContextProvider>
        <MerchandiseModalOpenProvider>
          <UserIsFavoriteProvider>
            <MerchandiseInfoCommentModalOpenProvider>
              { children }
            </MerchandiseInfoCommentModalOpenProvider>
          </UserIsFavoriteProvider>
        </MerchandiseModalOpenProvider>
      </MerchandiseImagesContextProvider>
    </MerchandiseIsInvalidProvider>
  )
}