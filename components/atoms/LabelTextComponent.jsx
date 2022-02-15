export const LabelTextComponent = ({ text, className }) => {
  return (
    <p className={`m-0 p-0 ${className || ''}`}>
      { text }
    </p>
  )
};
