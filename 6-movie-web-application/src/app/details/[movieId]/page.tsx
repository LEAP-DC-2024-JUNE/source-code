import { Suspense } from "react";
import { DetailPageSkeleton, Details } from "@/components";

const MovieDetails = ({ params: { movieId } }: MovieRouteParams) => {
  return (
    <Suspense fallback={<DetailPageSkeleton />}>
      <Details movieId={movieId} />
    </Suspense>
  );
};

export default MovieDetails;
