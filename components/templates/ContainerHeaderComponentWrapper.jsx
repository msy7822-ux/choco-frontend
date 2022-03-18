import { HeaderComponentWrapper } from "./HeaderComponentWrapper";
import { useRouter } from "next/router";

export const ContainerHeaderComponentWrapper = () => {
  const router = useRouter();
  const handleClickHeader = () => {
    router.push('/');
  };

  return (
    <HeaderComponentWrapper
      handleClickHeader={handleClickHeader}
    />
  )
};

