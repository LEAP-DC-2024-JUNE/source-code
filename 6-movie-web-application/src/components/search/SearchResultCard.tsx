"use client";

import Link from "next/link";
import { Vote } from "../common";
import { Fragment } from "react";
import { MovieImage } from "../movie";
import { ArrowRight } from "lucide-react";
import { Button, Separator } from "../ui";

type SearchResultCardProps = {
  movie: MovieDetails;
  removeSearchValue: () => void;
};

export const SearchResultCard = ({ movie, removeSearchValue }: SearchResultCardProps) => {
  const { original_title, vote_average, poster_path, id, release_date } = movie;

  const releaseYear = new Date(release_date).getFullYear();

  return (
    <Fragment>
      <Link href={`/details/${id}`} className="flex gap-x-4 p-2 hover:bg-muted rounded-md" onClick={removeSearchValue}>
        <MovieImage imageWidth="w154" posterPath={poster_path} className="w-[67px] h-[100px] rounded-md" />

        <div className="flex-1 text-foreground">
          <h4 className="w-48 lg:w-96 truncate text-xl font-semibold">{original_title}</h4>
          <Vote voteAverage={vote_average} />

          <div className="mt-3 flex justify-between text-sm font-medium">
            <h5>{releaseYear}</h5>
            <Button variant="link">
              See more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Link>

      <Separator className="my-2 border" />
    </Fragment>
  );
};
