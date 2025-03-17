import { Suspense } from "react";
import type { Metadata } from "next";
import { GenresOrSearch } from "@/components";

export const metadata: Metadata = {
  title: "Filter Your Favorite Movies",
  description: "Dive into the world of cinema with MovieZ.",
};

const MoviesByGenreLayout = ({ genres, movies }: ParallelRoutesLayoutProps) => {
  return (
    <Suspense>
      <GenresOrSearch genres={genres} movies={movies} title="Genres" wrapperTitle="Search Filter" />
    </Suspense>
  );
};

export default MoviesByGenreLayout;
