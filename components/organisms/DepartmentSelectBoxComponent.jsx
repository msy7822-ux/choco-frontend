import { departments } from '../../pages/api/departments';
import { SelectTagComponent } from '../atoms/SelectTagComponent';
import { OptionComponent } from '../atoms/optionComponent';
import { FormLabelComponent } from '../atoms/FormLabelComponent';

export const DepartmentSelectBoxComponent = ({ className, onChange, value }) => {
  return (
    <>
      <FormLabelComponent>
        <SelectTagComponent
          className={className}
          onChange={onChange}
          defaultValue={value}
        >
          <OptionComponent value={0}>
            学部を選択してください
          </OptionComponent>
          {
            departments?.map(({id, ja}) => {
              return (
                <OptionComponent key={id} value={id}>
                  { ja }
                </OptionComponent>
              )}
            )
          }
        </SelectTagComponent>
      </FormLabelComponent>
    </>
  )
};
