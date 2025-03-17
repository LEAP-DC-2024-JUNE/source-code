import { cn } from "@/lib";
import { ClassValue } from "clsx";
import { MoviesListCard } from "./MoviesListCard";

type MoviesListProps = {
  className: ClassValue;
  movies: MovieDetails[];
  imageWidth: ClassValue;
  imageHeight: ClassValue;
};

export const MoviesList = ({ movies, className, imageHeight, imageWidth }: MoviesListProps) => {
  return (
    <div className={cn("flex flex-wrap gap-5", className)}>
      {movies.map((movie, index) => (
        <MoviesListCard key={index} movie={movie} imageHeight={imageHeight} imageWidth={imageWidth} />
      ))}
    </div>
  );
};
