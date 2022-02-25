export const OptionComponent = ({ children, value, className, selected }) => {
  return (
    <option
      value={value}
      className={className}
    >
      { children }
    </option>
  )
};
