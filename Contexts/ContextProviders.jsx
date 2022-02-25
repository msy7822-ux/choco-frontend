import { MerchandiseImagesContextProvider } from './MerchandiseImageProvider';
import { MerchandiseImageModalOpenProvider } from './MerchandiseImageModalOpenProvider';
import { MerchandiseIsInvalidProvider } from './MerchandiseIsInvalidProvider';
import { UserIsFavoriteProvider } from './UserIsFavoriteProvider';
import { MerchandiseInfoCommentModalOpenProvider } from './MerchandiseInfoCommentModalOpenProvider';

export const ContextProviders = ({ children }) => {
  return (
    <MerchandiseIsInvalidProvider>
      <MerchandiseImagesContextProvider>
        <MerchandiseImageModalOpenProvider>
          <UserIsFavoriteProvider>
            <MerchandiseInfoCommentModalOpenProvider>
              { children }
            </MerchandiseInfoCommentModalOpenProvider>
          </UserIsFavoriteProvider>
        </MerchandiseImageModalOpenProvider>
      </MerchandiseImagesContextProvider>
    </MerchandiseIsInvalidProvider>
  )
}