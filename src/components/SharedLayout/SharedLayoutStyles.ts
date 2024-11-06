export const layoutStylesWithSidebar = {
  display: "grid",
  width: "100vw",
  height: "100vh",
  gridTemplateAreas: "'aside head' 'aside main'",
  gridTemplateColumns: "320px 1fr",
  gridTemplateRows: "72px 1fr",
  overflow: "hidden",
  transition: "grid-template-columns 0.8s ease",
};

export const layoutStylesWithoutSidebar = {
  display: "grid",
  width: "100vw",
  height: "100vh",
  gridTemplateAreas: "'head head' 'main main'",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "72px 1fr",
  transition: "grid-template-columns 0.8s ease",
};

const sidebarCommonStyles = {
  gridArea: "aside",
  backgroundColor: "background.paper",
  position: "absolute",
  height: "100%",
  transition: "transform 0.8s ease, opacity 0.8s ease",
  pointerEvents: "none",
  zIndex: -1,
};

export const openSidebarStyles = {
  ...sidebarCommonStyles,
  width: "320px",
  transform: "translateX(0)",
  opacity: 1,
  zIndex: 1,
};

export const closedSidebarStyles = {
  ...sidebarCommonStyles,
  width: "320px",
  transform: "translateX(-100%)",
  opacity: 0,
};

const mainCommonStyles = {
  gridArea: "main",
  padding: "0 32px",
  height: "calc(100vh - 72px)",
  transition: "transform 0.8s ease, width 0.8s ease",
  zIndex: 1,
};

export const mainStylesWithSidebar = {
  ...mainCommonStyles,
  transform: "translateX(320px)",
  width: "calc(100vw - 320px)",
};

export const mainStylesWithoutSidebar = {
  ...mainCommonStyles,
  transform: "translateX(0)",
  width: "100vw",
};
