export const upworkFeedContainer = {
  display: "flex",
  width: "1120px",
  height: "100%",
  padding: "0 32px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
};

export const titleStyles = {
  height: "48px",
  width: "100%",
  backgroundColor: "green",
};

export const tableWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
};

export const tableContentStyles = {
  flex: 1,
  width: "100%",
  backgroundColor: "yellow",
};

export const paginationContainerStyles = {
  display: "flex",
  gap: "12px",
  alignItems: "start",
  justifyContent: "flex-start",
  height: "64px",
  width: "100%",
  padding: "8px 0",
  borderTop: "1px solid",
  borderColor: "gray.300",
};

export const defaultPaginationStyles = {
  marginLeft: "auto",
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  ul: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  button: {
    width: "48px",
    height: "48px",
    padding: "12px 10px",
    margin: 0,
    fontSize: "16px",
    lineHeight: 1.5,
    fontWeight: "500",
    borderRadius: "4px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "gray.200",
    },
    "&.Mui-selected": {
      fontWeight: "600",
      border: "2px solid",
      borderColor: "blue.A300",
      backgroundColor: "background.paper",
    },
  },
  "& .MuiPaginationItem-page": {
    width: "36px",
  },
  "& .MuiPaginationItem-previousNext": {
    width: "48px",
    height: "48px",
    padding: "12px",
    color: "gray.800",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "24px",
  },
  "& .MuiPaginationItem-ellipsis": {
    display: "inline-block",
    margin: 0,
    padding: 0,
    width: "auto",
    height: "auto",
  },
};

export const opacityTextStyles = {
  opacity: 0.65,
};

export const boldTextStyles = {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: 1.5,
};

export const itemsShownWrapper = {
  padding: "12px 8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

export const pageItemsWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

export const itemsPageStyles = {
  height: "48px",
  width: "100px",
  padding: "12px 8px 12px 12px",
  borderRadius: "6px",
};

export const paginationDividerStyles = {
  height: "40px",
  borderColor: "gray.300",
};
