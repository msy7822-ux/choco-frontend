import { bundleMerchandiseValidations } from '../validations/Merchandise/createMerchandiseValidations';
import { returnToTop } from '../utils/functions/returnToTop';
import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';
import { useSession } from 'next-auth/react';
import { MerchandiseIsInvalidContext } from '../Contexts/MerchandiseIsInvalidProvider';

export const useCreateMerchandise = (
  title,
  description,
  price,
  condition,
  departmentId,
  publicStatus,
  images,
  createMerchandiseMutation,
) => {
  const router = useRouter()
  const { status } = useSession();
  const {
    setIsInvalid,
    setDetails,
    setNotFoundLogin
  } = useContext(MerchandiseIsInvalidContext);

  const createMerchandise = useCallback(() => {
    const { result: isValidMerchandise, details } = bundleMerchandiseValidations(title, description, price, condition, departmentId);

    if (status === 'unauthenticated' || status !== 'authenticated') {
      returnToTop();
      setNotFoundLogin(true);
      router.push('/login');
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
  }, [condition, departmentId, description, status, price, title])

  return { createMerchandise: createMerchandise } ;
};
