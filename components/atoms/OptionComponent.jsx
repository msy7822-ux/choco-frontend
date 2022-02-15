export const OptionComponent = ({ children, value, className }) => {
  return (
    <option
      value={value}
      className={className}
    >
      { children }
    </option>
  )
};
