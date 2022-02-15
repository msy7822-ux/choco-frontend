// ====== React Hooks =======
import { useState, useRef, useContext } from 'react';
import { useSession } from 'next-auth/react';
import { useMutation } from '@apollo/client';
// ====== Contexts =======
import { MerchandiseImagesContext } from '../../Contexts/MerchandiseImageProvider';
import { MerchandiseIsInvalidContext } from '../../Contexts/MerchandiseIsInvalidProvider';
// ====== Components =======
import { DepartmentSelectBoxComponent } from './DepartmentSelectBoxComponent';
import { MerchandiseStatusSelectBoxComponent } from './MerchandiseStatusSelectBoxComponent';
import { ListingImageComponent } from './ListingImageComponent';
import { InputComponent } from '../atoms/inputComponent';
import { TextareaComponent } from '../atoms/TextareaComponent';
import { PriceInputFieldComponent } from './PriceInputFieldComponent';
import { ButtonComponent } from '../atoms/ButtonComponent';
import { LabelTextComponent } from '../atoms/LabelTextComponent';
// ====== Graphql Queries ======
import { CREATE_MERCHANDISE } from '../../apollo/queries/create_merchandise_mutation';
// ====== functions ======
import { handleCreateMerchandise } from '../../utils/functions/onClickCallbacks/listingFormsComponentFunctions';
import { confirmInvalidFormElement } from '../../utils/functions/confirmInvalidFormElement';
import {
  handleChangeDepartment,
  handleChangeMerchandiseCondition,
  handleChangeMerchandiseTitle,
  handleChangeMerchandiseDescription,
  handleChangePrice,
} from '../../utils/functions/onChangeCallbacks/listingFormsComponentFunctions';

export const ListingFormsComponent = ({ className }) => {
  const { status: loginStatus } = useSession();
  const { images } = useContext(MerchandiseImagesContext)
  const { setIsInvalid, setDetails, details } = useContext(MerchandiseIsInvalidContext);

  const [createMerchandiseMutation] = useMutation(CREATE_MERCHANDISE)

  const [departmentId, setDepartmentId] = useState(0);
  const [condition, setCondition] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const publicStatus = useRef(null);

  return (
    <div className={`text-center ${className || ''}`}>
      <div className='w-[100%] mt-5'>
        <ListingImageComponent className='justify-center' />
      </div>

      <LabelTextComponent
        text='・学部を選択'
        className={`text-left mx-[10%] mt-6 w-[80%] ${confirmInvalidFormElement(details, '学部') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <DepartmentSelectBoxComponent
        onChange={(event) => handleChangeDepartment(event, setDepartmentId)}
        className='form-select m-auto w-[80%] text-[#818181] block appearance-none bg-white border border-[#818181] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='・商品の状態を選択'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品の状態') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <MerchandiseStatusSelectBoxComponent
        onChange={(event) => handleChangeMerchandiseCondition(event, setCondition)}
        className='form-select m-auto w-[80%] text-[#818181] block appearance-none bg-white border border-[#818181] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='・商品名を入力'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品名') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <InputComponent
        type='text'
        placeholder='商品名を入力してください'
        onChange={(event) => handleChangeMerchandiseTitle(event, setTitle)}
        className='border-b-[1px] py-1 border-[#818181] m-auto w-[80%] focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='・商品の説明を入力'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品の説明') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <TextareaComponent
        placeholder={`商品の説明\n(任意、1000文字まで)\n(商品の状態、定価、注意点など)\n\n例：2020年に大学の講義で使用した経済学の参考書です。基本的に半期の授業でしか使用していないので状態は非常に良いです。`}
        onChange={(event) => handleChangeMerchandiseDescription(event, setDescription)}
        className='border-b-[1px] border-[#818181] m-auto h-[200px] w-[80%] focus:outline-none focus:shadow-outline resize-none'
      />

      <div className='mt-5'>
        <PriceInputFieldComponent
          price={price}
          details={details}
          onChange={(event)=> handleChangePrice(event, setPrice)}
        />
      </div>

      <div className='mt-6'>
        <ButtonComponent
          onClick={() => {
            handleCreateMerchandise(title, description, price, condition, departmentId, publicStatus, images, loginStatus, setIsInvalid, setDetails, createMerchandiseMutation)
          }}
          className='bg-blue-500 select-none w-[82%] text-white font-bold py-2 px-4 rounded-full'
        >
          出品する
        </ButtonComponent>
      </div>
    </div>
  )
};
