export const ButtonComponent = ({ children, onClick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      { children }
    </button>
  )
};
