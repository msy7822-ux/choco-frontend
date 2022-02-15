import { HeaderComponentWrapper } from "./HeaderComponentWrapper";
import { useRouter } from "next/router";

export const ContainerHeaderComponentWrapper = () => {
  const router = useRouter();
  const handleClickHeader = () => {
    // router.push('/');
    router.push('/test');
  };

  return (
    <HeaderComponentWrapper
      handleClickHeader={handleClickHeader}
    />
  )
};

