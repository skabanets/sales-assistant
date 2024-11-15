export const fieldWrapperStyles = {
  position: "relative",
};

export const navLinkStyles = {
  width: "288px",
  color: "gray.800",
  height: "48px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  padding: "6px 16px 6px 12px",
  "&.active": {
    backgroundColor: "gray.200",
  },
  "&:hover": {
    backgroundColor: "blue.100",
  },
};

export const backdropStyles = {
  color: "#fff",
  zIndex: 100,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
};

export const modalBtnWrapperStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "16px",
  alignSelf: "stretch",
};

export const modalBtnStyles = {
  width: "fit-content",
};

export const switcherBtnStyles = {
  width: "48px",
  height: "48px",
};

export const formControlStyles = {
  "& fieldset": {
    border: "none",
  },
};

export const infoTitleStyles = {
  display: "flex",
  padding: "16px 8px 8px 8px",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
};

export const vacancyBlockContainerStyles = {
  display: "flex",
  padding: "0px 8px",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  margin: "0 auto",
  borderRadius: "16px",
  border: "1px solid",
  borderColor: "gray.300",
  width: "800px",
};
