import { useCallback, useState } from "react";

// [WIP]
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // サーバー側の時、初期値をinitialValueを返す
    if (typeof window === 'undefined') {
      return initialValue;
    }
  });
};
