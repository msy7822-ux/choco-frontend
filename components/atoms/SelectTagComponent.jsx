export const SelectTagComponent = ({
  children,
  name,
  id,
  className,
  onChange,
}) => {
  return (
    <select
      name={name}
      id={id}
      className={className}
      onChange={onChange}
    >
      { children }
    </select>
  )
}