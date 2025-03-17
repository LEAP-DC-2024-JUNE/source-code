export const fixedVoteAverage = (voteAverage: number): string => {
  return voteAverage.toFixed(1);
};

export const convertedVoteCount = (voteCount: number): string => {
  const units = ["", "k", "M", "B", "T"];
  let unitIndex = 0;

  while (voteCount >= 1000 && unitIndex < units.length - 1) {
    voteCount /= 1000;
    unitIndex++;
  }

  const unit = units[unitIndex];

  return voteCount % 1 === 0 ? `${voteCount}${unit}` : `${voteCount.toFixed(1)}${unit}`;
};
