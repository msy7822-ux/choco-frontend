import { bundleMerchandiseValidations } from '../validations/Merchandise/createMerchandiseValidations';
import { returnToTop } from '../utils/functions/returnToTop';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useCreateMerchandise = (
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
  const router = useRouter()
  const createMerchandise = useCallback(() => {
    const { result: isValidMerchandise, details } = bundleMerchandiseValidations(title, description, price, condition, departmentId);

    if (loginStatus == 'unauthenticated') {
      returnToTop();
      router.push('/login')
      return;
    }

    if (!isValidMerchandise) {
      setIsInvalid(true);
      setDetails(details);
      returnToTop();
      return;
    } else {
      setIsInvalid(false);
    };

    createMerchandiseMutation({ variables: {
      title: title,
      description: description,
      price: price,
      publicStatus: publicStatus.current,
      condition: condition,
      department_id: departmentId,
      image: images === [] ? null : images
    }}).then((res) => {
      console.log(res);
      router.push('/')
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, departmentId, description, loginStatus, price, title])

  return { createMerchandise: createMerchandise } ;
};
