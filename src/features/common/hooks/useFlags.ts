export const useFlags = (flag: string) => {
  const flagURL = `https://wise.com/public-resources/assets/flags/rectangle/${flag.toLowerCase()}.png`;
  return { flagURL };
};
