export const layoutStylesWithSidebar = {
  display: "grid",
  width: "100vw",
  height: "100vh",
  gridTemplateAreas: "'aside head' 'aside main'",
  gridTemplateColumns: "320px 1fr",
  gridTemplateRows: "72px 1fr",
  overflow: "hidden",
  transition: "grid-template-columns 0.5s ease",
};

export const layoutStylesWithoutSidebar = {
  display: "grid",
  width: "100vw",
  height: "100vh",
  gridTemplateAreas: "'head head' 'main main'",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "72px 1fr",
  transition: "grid-template-columns 0.3s ease",
};

export const openSidebarStyles = {
  gridArea: "aside",
  backgroundColor: "background.paper",
  width: "320px",
  position: "relative",
  height: "100%",
  transition: "width 0.8s ease, opacity 0.8s ease",
  opacity: 1,
};

export const closedSidebarStyles = {
  gridArea: "aside",
  backgroundColor: "background.paper",
  width: "0",
  position: "absolute",
  height: "100%",
  transition: "width 0.8s ease, opacity 0.8s ease",
  opacity: 0,
  pointerEvents: "none",
};

export const mainStyles = {
  gridArea: "main",
  margin: "0 auto",
  height: "calc(100vh - 72px)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
