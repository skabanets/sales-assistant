export const layoutStyles = {
  display: "grid",
  width: "100vw",
  height: "100vh",
  gridTemplateAreas: "'aside head' 'aside main'",
  gridTemplateColumns: "320px 1fr",
  gridTemplateRows: "72px 1fr",
};

export const headerStyles = { gridArea: "head" };

export const asideStyles = { gridArea: "aside" };

export const mainStyles = { gridArea: "main" };
