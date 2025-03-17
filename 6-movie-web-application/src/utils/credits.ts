type MovieCredits = {
  job?: string;
  name: string;
  known_for_department?: string;
}[];

type JobType = "Writer" | "Director" | "Acting";

export const getNamesByRole = (credits: MovieCredits, role: JobType) => {
  const filteredNames = credits.filter((person) => (person.job || person.known_for_department) === role).map(({ name }) => name);

  const firstFiveNames = filteredNames.slice(0, 5);

  return firstFiveNames;
};
