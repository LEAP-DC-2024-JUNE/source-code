import { Suspense } from "react";
import type { Metadata } from "next";
import { GenresOrSearch } from "@/components";

export const metadata: Metadata = {
  title: "Search Your Favorite Movies",
  description: "Dive into the world of cinema with MovieZ. Use our search to find the latest movies, trailers, reviews, and your all-time favorites.",
};

const MoviesSearchLayout = ({ genres, movies }: ParallelRoutesLayoutProps) => {
  return (
    <Suspense>
      <GenresOrSearch title="Search by genre" reverse wrapperTitle="Search results" genres={genres} movies={movies} />
    </Suspense>
  );
};

export default MoviesSearchLayout;
