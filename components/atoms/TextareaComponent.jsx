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
        value={value}
        cols={cols}
        rows={rows}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}