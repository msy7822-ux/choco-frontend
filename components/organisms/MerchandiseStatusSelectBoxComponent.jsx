import { FormLabelComponent } from "../atoms/FormLabelComponent";
import { SelectTagComponent } from "../atoms/SelectTagComponent";
import { merchandiseStatuses } from "../../pages/api/merchandise_statuses";
import { OptionComponent } from "../atoms/OptionComponent";

export const MerchandiseStatusSelectBoxComponent = ({ className, onChange, value }) => {
  return (
    <FormLabelComponent>
      <SelectTagComponent
        className={className}
        onChange={onChange}
        defaultValue={value}
      >
        <OptionComponent value={0}>
          商品の状態を選択する
        </OptionComponent>
        {
          merchandiseStatuses?.map(({id, ja}) => {
            return(
              <OptionComponent key={id} value={id}>
                { ja }
              </OptionComponent>
            )
          })
        }
      </SelectTagComponent>
    </FormLabelComponent>
  )
};
