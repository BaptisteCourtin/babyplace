import { useEffect, useState } from "react";

export default function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const valueLocal = window.localStorage.getItem(key);
    return valueLocal !== null ? JSON.parse(valueLocal) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
