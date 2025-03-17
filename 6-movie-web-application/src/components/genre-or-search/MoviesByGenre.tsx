"use client";

import { Loading } from "./Loading";
import { MoviesList } from "../movie";
import { useMoviesByGenre } from "@/hooks";
import { DynamicPagination } from "../common";
import { NoResultsFound } from "./NoResultsFound";

export const MoviesByGenre = () => {
  const { isLoading, movies, totalPages, totalResults } = useMoviesByGenre();

  if (isLoading) return <Loading />;

  if (!totalResults) return <NoResultsFound />;

  return (
    <div className="flex-1 space-y-8 lg:pr-12">
      <h4 className="text-xl text-foreground font-semibold">{totalResults} titles</h4>

      <MoviesList movies={movies} className="lg:gap-x-12 lg:gap-y-8" imageHeight="lg:h-[244px]" imageWidth="lg:w-[165px]" />

      <DynamicPagination totalPages={totalPages} />
    </div>
  );
};
