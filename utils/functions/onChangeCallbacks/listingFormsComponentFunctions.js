export const handleChangeDepartment = (event, setDepartmentId) => {
  setDepartmentId(event.target.value);
};

export const handleChangeMerchandiseCondition = (event, setCondition) => {
  setCondition(event.target.value);
};

export const handleChangeMerchandiseTitle = (event, setTitle) => {
  setTitle(event.target.value);
};

export const handleChangeMerchandiseDescription = (event, setDescription) => {
  setDescription(event.target.value);
};

export const handleChangePrice = (event, setPrice) => {
  if (event.target.value < 0) {
    setPrice(0);
    return;
  }
  setPrice(event.target.value);
};
