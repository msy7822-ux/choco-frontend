import { useCallback, useState } from "react";

// [WIP]
// export const useLocalStorage = (key, initialValue) => {
export const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState('567');
  console.log(storedValue);
};
