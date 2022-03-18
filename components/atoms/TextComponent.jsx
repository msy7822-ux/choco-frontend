export const TextComponent = ({ text, className }) => {
  return (
    <p className={`p-0 m-0 ${className || ''}`} >
      { text }
    </p>
  )
};
