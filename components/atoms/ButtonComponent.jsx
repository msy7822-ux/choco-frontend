export const ButtonComponent = ({ children, onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      { children }
    </button>
  )
};
