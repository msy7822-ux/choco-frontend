import { InputComponent } from '../atoms/inputComponent';
import { LabelTextComponent } from '../atoms/LabelTextComponent';
import { calculateFeeAndProfit } from '../../utils/functions/calculateFeeAndProfit';
import { confirmInvalidFormElement } from '../../utils/functions/confirmInvalidFormElement';

export const PriceInputFieldComponent = ({
  price,
  className,
  onChange,
  details,
}) => {
  const {fee, profit} = calculateFeeAndProfit(price);

  return (
    <div className={className}>
      <LabelTextComponent
        text='・商品価格(300 ~ 9,999,999)'
        className={`text-left text-[#818181] mx-[10%] mt-5 w-[80%] ${confirmInvalidFormElement(details, '商品価格') ? 'text-[#dd2828]' : 'text-[#818181]'}`}
      />

      <span>￥</span>
      <InputComponent
        value={price && price !== 0 ? price : 0}
        type='number'
        placeholder='価格をご記入ください'
        onChange={onChange}
        className='border-b-[1px] p-1 border-[#818181] w-[80%] focus:outline-none focus:shadow-outline'
      />

      <div className='flex justify-between m-auto w-[80%] text-[#848484] mt-3'>
        <LabelTextComponent text='販売手数料(5%)' />
        <LabelTextComponent text={`￥${fee}`} />
      </div>

      <div className='flex justify-between m-auto w-[80%] text-[#848484]'>
        <LabelTextComponent text='販売利益' />
        <LabelTextComponent text={`￥${profit}`} />
      </div>
    </div>
  )
};
