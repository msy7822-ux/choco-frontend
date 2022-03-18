// ====== React Hooks =======
import { useContext, useEffect } from 'react';
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
// ====== functions ======
import { useEditMerchandise } from '../../hooks/useEditMerchandise';
import { confirmInvalidFormElement } from '../../utils/functions/confirmInvalidFormElement';
import { useFetchMerchandiseInfo } from '../../hooks/useFetchMerchandiseInfo';
import {
  handleChangeDepartment,
  handleChangeMerchandiseCondition,
  handleChangeMerchandiseTitle,
  handleChangeMerchandiseDescription,
  handleChangePrice,
} from '../../utils/functions/onChangeCallbacks/listingFormsComponentFunctions';

import {
  departmentState,
  conditionState,
  titleState,
  descriptionState,
  priceState,
} from '../../utils/lib/recoil/atoms/atoms';
import { useRecoilState } from 'recoil';

export const EditMerchandiseFormsComponent = ({ className }) => {
  const { images } = useContext(MerchandiseImagesContext)
  const { details } = useContext(MerchandiseIsInvalidContext);

  const {
    id: merchandiseId,
    department,
    condition: conditionVal,
    title: titleVal,
    description: descriptionVal,
    price: priceVal
  } = useFetchMerchandiseInfo();

  const [departmentId, setDepartmentId] = useRecoilState(departmentState);
  const [condition, setCondition] = useRecoilState(conditionState);
  const [title, setTitle] = useRecoilState(titleState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [price, setPrice] = useRecoilState(priceState);

  useEffect(() => {
    setDepartmentId(department?.id);
    setCondition(conditionVal);
    setTitle(titleVal);
    setDescription(descriptionVal);
    setPrice(priceVal);
  }, [department, conditionVal, titleVal, descriptionVal, priceVal]);

  const { editMerchandise } = useEditMerchandise();

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
        value={departmentId}
        onChange={(event) => handleChangeDepartment(event, setDepartmentId)}
        className='form-select m-auto w-[80%] text-[#5e5d5d] block appearance-none bg-white border border-[#818181] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='・商品の状態を選択'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品の状態') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <MerchandiseStatusSelectBoxComponent
        value={condition}
        onChange={(event) => handleChangeMerchandiseCondition(event, setCondition)}
        className='form-select m-auto w-[80%] text-[#5e5d5d] block appearance-none bg-white border border-[#818181] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='・商品名を入力'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品名') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <InputComponent
        type='text'
        placeholder='商品名を入力してください'
        value={title}
        onChange={(event) => handleChangeMerchandiseTitle(event, setTitle)}
        className='border-b-[1px] py-1 border-[#818181] m-auto w-[80%] focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='・商品の説明を入力'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品の説明') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <TextareaComponent
        placeholder={`商品の説明\n(任意、1000文字まで)\n(商品の状態、定価、注意点など)\n\n例：2020年に大学の講義で使用した経済学の参考書です。基本的に半期の授業でしか使用していないので状態は非常に良いです。`}
        value={description}
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
          onClick={() => { editMerchandise(merchandiseId, title, description, price, condition, departmentId, images) }}
          className='bg-blue-500 select-none w-[82%] text-white font-bold py-2 px-4 rounded-full'
        >
          更新する
        </ButtonComponent>
      </div>
    </div>
  )
};
