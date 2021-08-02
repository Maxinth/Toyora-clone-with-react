import { useRef, useEffect } from "react";

const useInputFocus = (condition: boolean) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (condition) {
      inputRef.current?.focus();
    }
  });

  return { inputRef };
};

export default useInputFocus;
