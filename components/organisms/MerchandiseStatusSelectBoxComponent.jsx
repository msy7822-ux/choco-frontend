import { FormLabelComponent } from "../atoms/FormLabelComponent";
import { SelectTagComponent } from "../atoms/SelectTagComponent";
import { merchandiseStatuses } from "../../pages/api/merchandise_statuses";
import { OptionComponent } from "../atoms/optionComponent";

export const MerchandiseStatusSelectBoxComponent = ({ className, onChange }) => {
  return (
    <FormLabelComponent>
      <SelectTagComponent
        className={className}
        onChange={onChange}
      >
        <OptionComponent value={0}>
          商品の状態を選択する
        </OptionComponent>
        {
          merchandiseStatuses?.map(({id, ja}) => {
            return(
              <OptionComponent key={id} value={ja}>
                { ja }
              </OptionComponent>
            )
          })
        }
      </SelectTagComponent>
    </FormLabelComponent>
  )
};
