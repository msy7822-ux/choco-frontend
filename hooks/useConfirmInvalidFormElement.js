export const useConfirmInvalidFormElement = (details, formElementType) => {
  if (!details) return null;
  return details.includes(formElementType);
};
