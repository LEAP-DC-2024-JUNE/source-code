"use client";

import { useSearchParams } from "next/navigation";
import { useFetchDataFromTMDB } from "./useFetchDataFromTMDB";

export const useMoviesByGenre = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const genreIds = searchParams.get("genreIds") ?? "";

  const { data, isLoading } = useFetchDataFromTMDB<MoviesListResponse>(`/discover/movie?language=en&with_genres=${genreIds}&page=${page}`);

  const allMovies = data?.results ?? [];
  const totalNumberOfPages = data?.total_pages ?? 0;
  const totalNumberOfResults = data?.total_results ?? 0;

  return { isLoading, genreIds, movies: allMovies, totalPages: totalNumberOfPages, totalResults: totalNumberOfResults };
};
