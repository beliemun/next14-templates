import { useCallback, useState } from "react";

const useGetHTMLDivSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const ref = useCallback((node: HTMLDivElement) => {
    if (node) {
      setSize({
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
    }
  }, []);
  return { size, ref };
};

export default useGetHTMLDivSize;
