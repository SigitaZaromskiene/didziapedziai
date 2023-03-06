import { useState, useEffect } from "react";

export const useLocalStorage = (init, lskey) => {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(lskey);

    return null === data ? init : JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem(lskey, JSON.stringify(value));
  }, [value, lskey]);

  return [value, setValue];
};

export default useLocalStorage;
