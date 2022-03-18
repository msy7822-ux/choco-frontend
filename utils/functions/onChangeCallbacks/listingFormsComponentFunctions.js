export const handleChangeDepartment = (event, setDepartmentId) => {
  setDepartmentId(parseInt(event.target.value, 10));
};

export const handleChangeMerchandiseCondition = (event, setCondition) => {
  setCondition(parseInt(event.target.value, 10));
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
  setPrice(parseInt(event.target.value, 10));
};
