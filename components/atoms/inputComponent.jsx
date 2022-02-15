export const InputComponent = ({
  type,
  accept,
  id,
  name,
  className,
  placeholder,
  onChange,
  onSubmit,
}) => {
  return (
    <input
      type={type}
      accept={accept || ''}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
};
