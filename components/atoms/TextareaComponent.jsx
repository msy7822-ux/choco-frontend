export const TextareaComponent = ({
  value,
  onChange,
  cols,
  rows,
  className,
  placeholder,
}) => {
  return (
    <>
      <textarea
        cols={cols}
        rows={rows}
        value={value && value !== '' ? value : ''}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}