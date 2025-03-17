"use client";

import Link from "next/link";
import { Card } from "../ui";
import { useFetchDataFromTMDB } from "@/hooks";
import { SearchLoading } from "./SearchLoading";
import { SearchResultCard } from "./SearchResultCard";
import { SearchNoResultsFound } from "./SearchNoResultsFound";

type SearchResultsListProps = {
  searchValue: string;
  removeSearchValue: () => void;
};

export const SearchResultsList = ({ searchValue, removeSearchValue }: SearchResultsListProps) => {
  const { data, isLoading } = useFetchDataFromTMDB<MoviesListResponse>(`/search/movie?query=${searchValue}&language=en-US&page=1`);

  const movies = data?.results ?? [];
  const firstFiveMovies = movies.slice(0, 5);

  if (isLoading) return <SearchLoading />;

  if (!firstFiveMovies.length) return <SearchNoResultsFound />;

  return (
    <Card className="search-result p-3 h-[500px] lg:h-auto overflow-y-auto">
      {firstFiveMovies.map((movie, index) => (
        <SearchResultCard key={index} movie={movie} removeSearchValue={removeSearchValue} />
      ))}

      <Link href={`/search?value=${searchValue}`} className="px-4 py-2.5 text-sm font-medium text-foreground">
        See all results for &#34;{searchValue}&#34;
      </Link>
    </Card>
  );
};
