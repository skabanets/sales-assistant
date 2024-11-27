export const getFormatErrorMessage = (errorCode: string): string => {
  return errorCode.replaceAll("_", " ").replace(/^\w/, (char: string) => char.toUpperCase());
};
