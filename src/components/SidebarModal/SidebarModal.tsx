import React, { FC, RefObject, useEffect } from "react";
import Box from "@mui/material/Box";

import { useEscapeKeyClose } from "../../hooks";
import { sidebarModalStyles } from "./SidebarModalStyles";

interface ISidebarModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
  modalRef: RefObject<HTMLDivElement>;
}
export const SidebarModal: FC<ISidebarModalProps> = ({ children, toggleModal, modalRef }) => {
  useEscapeKeyClose(toggleModal);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={sidebarModalStyles.paper} ref={modalRef}>
      {children}
    </Box>
  );
};
