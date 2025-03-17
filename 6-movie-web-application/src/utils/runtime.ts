export const convertRuntimeIntoHours = (runtime: number): string => {
  const remainingMinutes = runtime % 60;
  const hours = Math.floor(runtime / 60);

  return `${hours}h ${remainingMinutes}m`;
};
