export const SelectTagComponent = ({
  children,
  name,
  id,
  className,
  onChange,
  defaultValue
}) => {
  return (
    <select
      name={name}
      id={id}
      className={className}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      { children }
    </select>
  )
}