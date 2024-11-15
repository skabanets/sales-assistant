import { useEffect, useRef, useState } from "react";

interface UseExpandableTextProps {
  content: string;
  maxShortHeight: number;
}

export const useExpandableText = ({ content, maxShortHeight }: UseExpandableTextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showExpand, setShowExpand] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setShowExpand(contentHeight > maxShortHeight);
    }
  }, [content, maxShortHeight]);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    showExpand,
    toggleOpen,
    contentRef,
  };
};
