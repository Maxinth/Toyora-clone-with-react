import { useRef, useEffect } from "react";

const useInputFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return { inputRef };
};

export default useInputFocus;
