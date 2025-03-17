"use client";

import { GenreCard } from "./GenreCard";
import { MovieImage } from "@/components/movie";

type GenresProps = {
  overview: string;
  posterPath: string;
  genres: MovieGenre[];
};

export const Genres = ({ genres, overview, posterPath }: GenresProps) => {
  return (
    <div className="flex gap-x-[34px] lg:block">
      <MovieImage posterPath={posterPath} className="block w-[100px] h-[148px] rounded shrink-0 lg:hidden" />

      <div className="space-y-5 mb-5">
        <div className="flex flex-wrap gap-3">
          {genres.map((genre, index) => (
            <GenreCard key={index} genre={genre} />
          ))}
        </div>

        <p className="text-base">{overview}</p>
      </div>
    </div>
  );
};
