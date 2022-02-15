import { bundleMerchandiseValidations } from '../../../validations/Merchandise/createMerchandiseValidations';
import { returnToTop } from '../returnToTop';

export const handleCreateMerchandise = (
  title,
  description,
  price,
  condition,
  departmentId,
  publicStatus,
  images,
  loginStatus,
  setIsInvalid,
  setDetails,
  createMerchandiseMutation,
) => {
  const { result: isValidMerchandise, details } = bundleMerchandiseValidations(title, description, price, condition, departmentId);

  // if (loginStatus == 'unauthenticated') {
  //   returnToTop();
  //   return;
  // }

  if (!isValidMerchandise) {
    setIsInvalid(true);
    setDetails(details);
    returnToTop();
    return;
  } else {
    setIsInvalid(false);
  };

  // createMerchandiseMutation({ variables: {
  //   title: title,
  //   description: description,
  //   price: price,
  //   publicStatus: publicStatus.current,
  //   condition: condition,
  //   department_id: departmentId,
  //   image: imageUrl === [] ? null : imageUrl,
  // }}).then((res) => {
  //   console.log(res);
  // })
};
