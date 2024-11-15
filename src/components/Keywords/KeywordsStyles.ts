export const keywordsBlockStyles = {
  display: "flex",
  padding: "0px 8px 16px 8px",
  alignItems: "flex-start",
  alignSelf: "stretch",
};

export const emotionButtonWrapperStyles = {
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
};

export const emotionBtnStyles = (isActive: boolean) => ({
  minWidth: 0,
  width: "36px",
  height: "36px",
  padding: 0,
  backgroundColor: isActive ? "blue.A300" : "transparent",
});

export const keywordsWrapperStyles = {
  display: "flex",
  padding: "4px 0px",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "4px",
  flexWrap: "wrap",
  width: "100%",
};

export const keywordsStyles = {
  padding: "2px 8px",
  width: "content-fit",
  borderRadius: "20px",
  backgroundColor: "gray.200",
  fontSize: "16px",
};
