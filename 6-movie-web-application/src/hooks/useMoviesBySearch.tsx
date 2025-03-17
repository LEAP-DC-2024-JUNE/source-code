"use client";

import { useSearchParams } from "next/navigation";
import { useFetchDataFromTMDB } from "./useFetchDataFromTMDB";

export const useMoviesBySearch = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("value") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const selectedGenreIds = searchParams.get("genreIds")?.split(",").map(Number) || [];

  const { data, isLoading } = useFetchDataFromTMDB<MoviesListResponse>(`/search/movie?query=${searchQuery}&language=en-US&page=${currentPage}`);

  const allMovies = data?.results ?? [];
  const totalNumberOfPages = data?.total_pages ?? 0;
  const totalNumberOfResults = data?.total_results ?? 0;

  const filteredMovies = selectedGenreIds.length
    ? allMovies.filter(({ genre_ids }) => genre_ids?.some((genreId: number) => selectedGenreIds.includes(genreId)))
    : allMovies;

  return {
    isLoading,
    searchQuery,
    movies: filteredMovies,
    totalPages: totalNumberOfPages,
    totalResults: selectedGenreIds.length ? filteredMovies.length : totalNumberOfResults,
  };
};
