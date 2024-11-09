import { Theme } from "@mui/material";

export const tableContainerStyles = {
  width: "100%",
  height: "100%",
};

export const tablestyles = {
  width: "100%",
  "& .MuiTableCell-root": {
    padding: "8px",
    width: "auto",
    verticalAlign: "top",
  },
};

export const tableHeadStyles = {
  borderBottom: "2px solid",
  borderColor: "gray.300",
};

export const tableRowStyles = {
  height: "auto",
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
};

export const chipStyles = {
  padding: "2px 8px",
  width: "content-fit",
  borderRadius: "20px",
};

export const keywordStyles = {
  ...chipStyles,
  backgroundColor: "gray.200",
};

export const getScoreStyles = (color: string) => ({
  ...chipStyles,
  backgroundColor: color,
});

export const titleInputStyles = (theme: Theme) => {
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

export const largeCellStyles = { width: "262px" };

export const mediumCellStyles = { width: "124px" };

export const smallCellStyles = { width: "94px" };
