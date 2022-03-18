import { LabelTextComponent } from '../atoms/LabelTextComponent';
import { RightArrowIconComponent } from '../atoms/RightAllowIconComponent';

const rightArrowIconClasses = 'text-[#818181] text-[15px]';
const menuTextClasses = 'text-[#818181] text-[17px] mb-2';
const menuLayoutClasses = 'flex justify-between mx-8 border-b mt-7'

export const MypageMenuComponent = ({ className }) => {
  return(
    <ul className={className}>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='いいねした商品' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='閲覧履歴' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='下書き一覧' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='出品した商品' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='購入した商品' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='クレジットカード登録' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
      <li className={menuLayoutClasses}>
        <LabelTextComponent text='住所登録' className={menuTextClasses} />
        <RightArrowIconComponent className={rightArrowIconClasses} />
      </li>
    </ul>
  )
};
