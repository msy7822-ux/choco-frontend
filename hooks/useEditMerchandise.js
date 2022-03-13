import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { EDIT_MERCHANDISE } from '../apollo/queries/edit_merchandise_mutation';
import { useCallback, useContext } from 'react';
import { MerchandiseIsInvalidContext } from '../Contexts/MerchandiseIsInvalidProvider';
import { useSession } from 'next-auth/react';
import { bundleMerchandiseValidations } from '../validations/Merchandise/createMerchandiseValidations';
import { returnToTop } from '../utils/functions/returnToTop';


export const useEditMerchandise = () => {
  const router = useRouter();
  const { status: loginStatus } = useSession();
  const { setNotFoundLogin, setIsInvalid, setDetails } = useContext(MerchandiseIsInvalidContext);
  const [editMerchandiseMutation] = useMutation(EDIT_MERCHANDISE);

  const editMerchandise = useCallback((merchandiseId, title, description, price, condition, departmentId, images) => {
    const { result: isValidMerchandise, details } = bundleMerchandiseValidations(title, description, price, condition, departmentId);

    if (loginStatus === 'unauthenticated') {
      returnToTop();
      setNotFoundLogin(true);
      router.push('/login');
      return;
    };

    if (!isValidMerchandise) {
      setIsInvalid(true);
      setDetails(details);
      returnToTop();
      return;
    } else {
      setIsInvalid(false);
    };

    editMerchandiseMutation({ variables: {
      merchandiseId: merchandiseId,
      title: title,
      description: description,
      price: price,
      publicStatus: 0,
      condition: parseInt(condition, 10),
      departmentId: parseInt(departmentId, 10),
      image: images
    }}).then((res) => {
      console.log(res);
      router.push('/');
    });
  }, []);

  return { editMerchandise: editMerchandise }
};
