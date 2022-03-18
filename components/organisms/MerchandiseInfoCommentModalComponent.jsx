import { ModalComponent } from '../atoms/ModalComponent';
import { ModalOpenContext } from '../../Contexts/ModalOpenProvider';
import { useContext, useEffect } from 'react';
import { ButtonComponent } from '../atoms/ButtonComponent';

export const MerchandiseInfoCommentModalComponent = () => {
  const { isOpen, commentModalClose } = useContext(ModalOpenContext);

  // unmountの時に強制的にmodalを閉じる
  useEffect(() => {
    return () => {
      commentModalClose();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
