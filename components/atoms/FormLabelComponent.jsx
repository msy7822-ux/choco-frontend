export const FormLabelComponent = ({ children, forAttr }) => {
  return (
    <label htmlFor={forAttr}>
      { children }
    </label>
  )
};
