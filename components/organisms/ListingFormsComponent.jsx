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
import { useCreateMerchandise } from '../../hooks/useCreateMerchandise';
import { useConfirmInvalidFormElement } from '../../hooks/useConfirmInvalidFormElement';
import {
  handleChangeDepartment,
  handleChangeMerchandiseCondition,
  handleChangeMerchandiseTitle,
  handleChangeMerchandiseDescription,
  handleChangePrice,
} from '../../utils/functions/onChangeCallbacks/listingFormsComponentFunctions';

export const ListingFormsComponent = ({ className }) => {
  const { images } = useContext(MerchandiseImagesContext)
  const { details } = useContext(MerchandiseIsInvalidContext);

  const [createMerchandiseMutation] = useMutation(CREATE_MERCHANDISE)

  const [departmentId, setDepartmentId] = useState(0);
  const [condition, setCondition] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const publicStatus = useRef(null);

  const { createMerchandise } = useCreateMerchandise(title, description, price, condition, departmentId, publicStatus, images, createMerchandiseMutation)

  return (
    <div className={`text-center ${className || ''}`}>
      <div className='w-[100%] mt-5'>
        <ListingImageComponent className='justify-center' />
      </div>

      <LabelTextComponent
        text='??????????????????'
        className={`text-left mx-[10%] mt-6 w-[80%] ${useConfirmInvalidFormElement(details, '??????') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <DepartmentSelectBoxComponent
        onChange={(event) => handleChangeDepartment(event, setDepartmentId)}
        className='form-select m-auto w-[80%] text-[#818181] block appearance-none bg-white border border-[#818181] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='???????????????????????????'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${useConfirmInvalidFormElement(details, '???????????????') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <MerchandiseStatusSelectBoxComponent
        onChange={(event) => handleChangeMerchandiseCondition(event, setCondition)}
        className='form-select m-auto w-[80%] text-[#818181] block appearance-none bg-white border border-[#818181] px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='?????????????????????'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${useConfirmInvalidFormElement(details, '?????????') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <InputComponent
        type='text'
        value={title}
        placeholder='????????????????????????????????????'
        onChange={(event) => handleChangeMerchandiseTitle(event, setTitle)}
        className='border-b-[1px] py-1 border-[#818181] m-auto w-[80%] focus:outline-none focus:shadow-outline'
      />

      <LabelTextComponent
        text='???????????????????????????'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${useConfirmInvalidFormElement(details, '???????????????') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />
      <TextareaComponent
        placeholder={`???????????????\n(?????????1000????????????)\n(??????????????????????????????????????????)\n\n??????2020??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????`}
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
          onClick={() => {
            publicStatus.current = 0
            createMerchandise()
          }}
          className='bg-blue-500 select-none w-[82%] text-white font-bold py-2 px-4 rounded-full'
        >
          ????????????
        </ButtonComponent>
      </div>
    </div>
  )
};
