const merchandiseTitleValidation = (title) => {
  return title && title !== '';
};

const merchandiseDescriptionValidation = (description) => {
  return description && description !== '';
}

const merchandisePriceValidation = (price) => {
  return price && price !== 0 && price > 0;
};

const merchandiseConditionValidation = (condition) => {
  return condition && condition !== '0';
};

const merchandiseDepartmentIdValidation = (departmentId) => {
  return departmentId && departmentId !== '0';
};

export const bundleMerchandiseValidations = (title, description, price, condition, departmentId) => {
  let resultDetails = [
    merchandiseDepartmentIdValidation(departmentId) ? null : '学部',
    merchandiseConditionValidation(condition) ? null : '商品の状態',
    merchandiseTitleValidation(title) ? null : '商品名',
    merchandiseDescriptionValidation(description) ? null : '商品の説明',
    merchandisePriceValidation(price) ? null : '商品価格',
  ];

  const result =  merchandiseTitleValidation(title)
                  && merchandiseDescriptionValidation(description)
                  && merchandisePriceValidation(price)
                  && merchandiseConditionValidation(condition)
                  && merchandiseDepartmentIdValidation(departmentId);

  return { result: result, details: resultDetails };
};
