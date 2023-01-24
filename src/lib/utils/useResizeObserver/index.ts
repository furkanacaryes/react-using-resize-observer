import { useEffect, useRef } from "react";

export type ResizeObserverParams = {
  target: Element;
  onResize: (entries: any) => void;
};

export const useResizeObserver = ({
  target,
  onResize,
}: ResizeObserverParams) => {
  const resizeObserver = useRef<ResizeObserver>();

  const resizeListener = (entries: any) => {
    onResize?.(entries);
  };

  const addResizeObserver = () => {
    if (!target) return;

    resizeObserver.current = new ResizeObserver(resizeListener);

    resizeObserver.current?.observe(target);
  };

  const removeResizeObserver = () => {
    resizeObserver.current?.disconnect();
  };

  useEffect(() => {
    addResizeObserver();

    return () => removeResizeObserver();
  }, [target]);

  return resizeObserver;
};
