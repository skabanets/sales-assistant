export const chatPageStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
  alignSelf: "stretch",
};
export const chatContainerStyles = {
  minWidth: "320px",
  maxWidth: "832px",
  width: "100%",
  padding: "0px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const chatMessagesListStyles = {
  ...chatContainerStyles,
  height: "100%",
  overflowY: "auto",
};

export const inputBlockStyles = {
  ...chatContainerStyles,
  padding: "16px 16px",
};
