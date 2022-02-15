export const TextComponent = ({ children, className }) => {
  return (
    <p className={`p-0 m-0 ${className || ''}`} >
      { children }
    </p>
  )
};
