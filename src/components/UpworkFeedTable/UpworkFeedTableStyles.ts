import { Theme } from "@mui/material";

export const tableContainerStyles = {
  overflow: "hidden",
};

export const tablestyles = {
  width: "100%",
  "& .MuiTableCell-root": {
    padding: "8px",
    width: "auto",
    verticalAlign: "top",
  },
  "& .MuiTableCell-head": {
    borderBottom: "2px solid",
    borderColor: "gray.300",
  },
};

export const tableHeaderStyles = {
  display: "flex",
  height: "116px",
};

export const tableRowStyles = {
  height: "108px",
  borderBottom: "1px solid",
  borderColor: "gray.800",
};

export const tableRowCellStyles = {
  alignItems: "start",
};

export const SortLabelStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
};

export const sortIconStyles = {
  width: "20px",
  height: "20px",
  color: "gray.400",
};

export const baseTableTextStyles = {
  margin: "8px 4px",
  fontSize: "14px",
  color: "gray.700",
  lineHeight: "20px",
};

export const headerTextWrapper = {
  ...baseTableTextStyles,
  fontWeight: 600,
  height: "40px",
};

export const ordinaryTextStyles = {
  ...baseTableTextStyles,
  textAlign: "right",
  height: "auto",
};

export const linkStyles = {
  lineHeight: "20px",
  textDecoration: "none",
  cursor: "pointer",
};

export const linkWrapperStyles = {
  padding: "8px 4px",
  width: "262px",
};

export const chipStyles = {
  padding: "2px 8px",
  width: "content-fit",
  borderRadius: "20px",
  backgroundColor: "gray.200",
};

export const keywordsWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  width: "262px",
  padding: "6px 0",
  fontSize: "14px",
  lineHeight: "20px",
};

export const scoreWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  width: "124px",
  padding: "6px 0",
  fontSize: "14px",
  lineHeight: "20px",
};

export const getScoreStyles = (color: string) => ({
  ...chipStyles,
  fontWeight: 500,
  backgroundColor: color,
});

export const largeCellStyles = { width: "262px" };

export const mediumCellStyles = { width: "124px" };

export const smallCellStyles = { width: "94px" };

export const tableInputStyles = (theme: Theme) => {
  return {
    height: "44px",
    padding: "8px 12px",
    border: `1px solid ${theme.palette.gray[400]}`,
    background: theme.palette.background.paper,
    borderRadius: "8px",
    "& .MuiFilledInput-input": {
      color: theme.palette.gray[700],
      fontSize: "14px",
      lineHeight: "20px",
    },
    "&:focus-within": {
      border: `1px solid ${theme.palette.primary.main}`,
      "& .MuiInputLabel-root": {
        fontWeight: 400,
        color: theme.palette.gray[600],
      },
    },
    "& .MuiFilledInput-root": {
      background: "transparent",
      border: "none",
      "&:before": { display: "none" },
      "&:after": { display: "none" },
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
      },
      "& .MuiFilledInput-input": {
        padding: "0",
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.gray[500],
    },
  };
};

export const tableBodyStyles = {
  display: "block",
  height: "calc(100vh - 316px)",
  overflowY: "auto",
};

export const messageBoxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1056px",
  height: "calc(100vh - 316px)",
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "gray.700",
};
