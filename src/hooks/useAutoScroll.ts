import { useEffect } from "react";

export const useAutoScroll = (ref: React.RefObject<HTMLDivElement>, dependency: unknown[]) => {
  useEffect(() => {
    if (ref.current) {
      requestAnimationFrame(() => {
        ref.current!.scrollTop = ref.current!.scrollHeight;
      });
    }
  }, dependency);
};
