import { MovieTitle } from "./MovieTitle";
import { MovieRating } from "./MovieRating";

type DetailsHeaderProps = {
  runtime: number;
  voteCount: number;
  releaseDate: string;
  voteAverage: number;
  originalTitle: string;
};

export const DetailsHeader = ({ originalTitle, releaseDate, runtime, voteAverage, voteCount }: DetailsHeaderProps) => {
  return (
    <div className="mt-8 mb-4 px-5 flex justify-between lg:mt-[52px] lg:mb-6 lg:px-0">
      <MovieTitle originalTitle={originalTitle} releaseDate={releaseDate} runtime={runtime} />
      <MovieRating voteAverage={voteAverage} voteCount={voteCount} />
    </div>
  );
};
