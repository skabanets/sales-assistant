export const dataWrapperStyles = {
  display: "flex",
};

export const infoBlockStyles = {
  display: "flex",
  padding: "8px 8px 24px 8px",
  alignItems: "flex-start",
  alignSelf: "stretch",
  height: "56px",
};

export const linkBlockStyles = {
  ...infoBlockStyles,
  flexGrow: 1,
  height: "auto",
};

export const dateBlockStyles = {
  ...infoBlockStyles,
  whiteSpace: "nowrap",
  letterSpacing: "0.4px",
};

export const linkStyles = {
  overflow: "hidden",
  color: "primary.main",
  textOverflow: "ellipsis",
  textDecoration: "none",
};

export const getScoreInfoStyles = (color: string) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  borderRadius: "20px",
  backgroundColor: color,
  height: "28px",
  width: "37px",
  fontWeight: 500,
  lineHeight: "24px",
  fontSize: "16px",
});

export const descriptionBlockStyles = {
  ...infoBlockStyles,
  flexDirection: "column",
  height: "auto",
  gap: "8px",
  transition: "height 3s ease",
};

export const fullDescriptionStyles = {
  display: "flex",
};

export const shortDescriptionStyles = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 6,
};

export const expandLinkStyles = {
  cursor: "pointer",
};
