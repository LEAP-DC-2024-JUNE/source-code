import { cn } from "@/lib";
import Link from "next/link";
import { Vote } from "../common";
import { ClassValue } from "clsx";
import { MovieImage } from "./MovieImage";

type MoviesListCardProps = {
  movie: MovieDetails;
  imageWidth: ClassValue;
  imageHeight: ClassValue;
};

export const MoviesListCard = ({ movie, imageHeight, imageWidth }: MoviesListCardProps) => {
  const { id, poster_path, vote_average, original_title } = movie;

  return (
    <Link href={`/details/${id}`} className={cn("group w-[157.5px] overflow-hidden rounded-lg bg-secondary space-y-1", imageWidth)}>
      <MovieImage imageWidth="w300" posterPath={poster_path} className={cn("relative w-[157.5px] h-[234px]", imageWidth, imageHeight)} />

      <div className="p-2">
        <Vote voteAverage={vote_average} />
        <h4 className="h-14 overflow-hidden text-ellipsis line-clamp-2 text-lg text-foreground">{original_title}</h4>
      </div>
    </Link>
  );
};
