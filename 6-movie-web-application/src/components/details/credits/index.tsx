import { CreditRow } from "./CreditRow";
import { getMovieCreditsById } from "@/services";
import { NoResultsFound } from "@/components/common";

type CreditsProps = { id: number };

export const Credits = async ({ id }: CreditsProps) => {
  const response = await getMovieCreditsById(id);

  if (!response) return <NoResultsFound />;

  const { actors, directors, writers } = response;

  return (
    <div className="space-y-5 text-foreground mb-8">
      <CreditRow role="Director" names={directors} />
      <CreditRow role="Writers" names={writers} />
      <CreditRow role="Stars" names={actors} />
    </div>
  );
};
