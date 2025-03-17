"use client";

import { useSearchParams } from "next/navigation";

export const useURLSearchParams = (pathname: string) => {
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") ?? "1";
  const searchValue = searchParams.get("value") ?? "";
  const genreIdString = searchParams.get("genreIds") ?? "";

  const selectedGenreIds = genreIdString.split(",").filter(Boolean);

  const generateQueryParams = (genreId: string) => {
    const updatedGenreIds = selectedGenreIds.includes(genreId) ? selectedGenreIds.filter((id) => id !== genreId) : [...selectedGenreIds, genreId];

    const queryParams = new URLSearchParams();

    if (updatedGenreIds.length) {
      queryParams.set("page", currentPage);
      queryParams.set("genreIds", updatedGenreIds.join(","));
    }

    if (pathname === "/search" && searchValue) {
      queryParams.set("value", searchValue);
    }

    const queryString = queryParams.toString();

    const newPath = queryString ? `${pathname}?${queryString}` : pathname;

    return newPath;
  };

  return { selectedGenreIds, generateQueryParams };
};
