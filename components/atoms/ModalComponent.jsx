export const ModalComponent = ({ children, isOpen, className }) => {
  return (
    <div className={`${isOpen ? '' : 'hidden'} fixed top-0 left-0 w-[100%] h-[100%] z-[1001] ${className || ''}`}>
      <div className='z-[1002]'>
        { children }
      </div>
    </div>
  )
};
