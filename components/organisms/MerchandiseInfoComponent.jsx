import { TextComponent } from '../atoms/TextComponent';
import { LabelTextComponent } from '../atoms/LabelTextComponent';
import { useFetchMerchandiseInfo } from '../../hooks/useFetchMerchandsieInfo';

export const MerchandiseInfoComponent = () => {
  const { title, price, department } = useFetchMerchandiseInfo();

  return (
    <div>
      <div className='flex justify-between mx-8 items-start'>
        <div>
          <TextComponent
            text={title}
            className='text-[20px]'
          />
          <TextComponent
            text={`￥${price}`}
            className='text-[17px]'
          />
        </div>

        <LabelTextComponent
          text={department?.name}
          className='inline-block text-[13px] mt-3 py-1 px-2 rounded text-white bg-blue-500'
        />
      </div>
    </div>
  )
};
