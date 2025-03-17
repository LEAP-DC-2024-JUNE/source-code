"use client";

import { cn } from "@/lib";
import { Badge } from "@/components/ui";
import { useRouter } from "next/navigation";
import { ChevronRight, X } from "lucide-react";
import { GenresLoading } from "./GenresLoading";
import { useURLSearchParams, useFetchDataFromTMDB } from "@/hooks";

type AllMovieGenresProps = { pathname?: string };

export const AllMovieGenres = ({ pathname = "/genres" }: AllMovieGenresProps) => {
  const { push } = useRouter();
  const { selectedGenreIds, generateQueryParams } = useURLSearchParams(pathname);
  const { data, isLoading } = useFetchDataFromTMDB<MovieGenresResponse>("/genre/movie/list?language=en");

  if (isLoading) return <GenresLoading />;

  const genres = data?.genres ?? [];

  const handleGenreSelection = (genreId: string) => () => {
    const newPath = generateQueryParams(genreId);

    push(newPath);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {genres.map(({ id, name }, index) => {
        const genreId = id.toString();
        const isSelected = selectedGenreIds.includes(genreId);

        return (
          <Badge
            key={index}
            variant="outline"
            onClick={handleGenreSelection(genreId)}
            className={cn("rounded-full cursor-pointer", isSelected && "bg-black text-white dark:bg-white dark:text-black")}
          >
            {name}
            {isSelected ? <X size={16} className="ml-2" /> : <ChevronRight size={16} className="ml-2" />}
          </Badge>
        );
      })}
    </div>
  );
};
