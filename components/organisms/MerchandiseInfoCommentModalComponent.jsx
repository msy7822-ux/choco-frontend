import { ModalComponent } from '../atoms/ModalComponent';
import { MerchandiseInfoCommentModalOpenContext } from '../../Contexts/MerchandiseInfoCommentModalOpenProvider';
import { useContext } from 'react';
import { ButtonComponent } from '../atoms/ButtonComponent';

export const MerchandiseInfoCommentModalComponent = () => {
  const { isOpen, commentModalClose } = useContext(MerchandiseInfoCommentModalOpenContext);

  return(
    <ModalComponent
      isOpen={isOpen}
      className='bg-[rgba(0,0,0,0.8)]'
    >
      <div className='bg-white h-[80vh] m-5 rounded overflow-auto'>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
        <div>コメント</div>
        <p>簗田さん</p>
        <p>
          こちら値下げは可能ですか？
        </p>
      </div>
      <ButtonComponent
        onClick={() => commentModalClose()}
        className='bg-blue-500 text-white px-3 py-1 w-[90%] mx-[5%] rounded-full'
      >
        閉じる
      </ButtonComponent>
    </ModalComponent>
  )
};
