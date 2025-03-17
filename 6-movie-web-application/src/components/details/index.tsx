import { Genres } from "./genres";
import { Credits } from "./credits";
import { Backdrop } from "./backdrop";
import { DetailsHeader } from "./header";
import { NoResultsFound } from "../common";
import { getMovieDetailById } from "@/services";
import { MoreLikeThis } from "./more-like-this";

type DetailsProps = { movieId: string };

export const Details = async ({ movieId }: DetailsProps) => {
  const movieDetail = await getMovieDetailById(movieId);

  if (!movieDetail) return <NoResultsFound />;

  const { id, backdrop_path, genres, original_title, overview, poster_path, release_date, vote_average, runtime, vote_count } = movieDetail;

  return (
    <section className="page-detail text-foreground">
      <DetailsHeader originalTitle={original_title} releaseDate={release_date} runtime={runtime} voteAverage={vote_average} voteCount={vote_count} />

      <Backdrop backdropPath={backdrop_path} posterPath={poster_path} id={id} />

      <div className="px-5 lg:px-0">
        <Genres genres={genres} overview={overview} posterPath={poster_path} />

        <Credits id={id} />

        <MoreLikeThis id={id} />
      </div>
    </section>
  );
};
