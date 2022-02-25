export const InputComponent = ({
  type,
  accept,
  id,
  name,
  className,
  placeholder,
  onChange,
  onSubmit,
  value,
}) => {
  return (
    <input
      type={type}
      accept={accept || ''}
      id={id}
      value={value && value !== '' ? value : ''}
      name={name}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
};
