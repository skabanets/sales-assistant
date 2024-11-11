export const getParsedOptions = (query: string): string[] => {
  const decodedQuery = decodeURIComponent(query);
  const items = decodedQuery.split(",");

  return items;
};
