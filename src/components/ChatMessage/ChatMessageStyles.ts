export const messageWrapperStyles = (isBot: boolean = true) => ({
  backgroundColor: isBot ? "gray.200" : "gray.100",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  borderRadius: "8px",
  height: "auto",
  border: isBot ? "none" : "1px solid",
  borderColor: "gray.300",
});

export const chatIconWrapperStyles = {
  padding: "8px",
  display: "flex",
  alignItems: "center",
};

export const chatIconStyles = (isBot: boolean = true) => ({
  color: isBot ? "primary.main" : "gray.600",
  width: "32px",
  height: "32px",
});

export const textMessageStyles = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "12px 16px",
  borderRadius: "8px",
  width: "100%",
};
