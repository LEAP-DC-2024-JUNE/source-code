import Link from "next/link";
import { Button } from "../ui";
import { MoviesList } from "../movie";
import { ArrowRight } from "lucide-react";
import { getMoviesByCategory } from "@/services";

type MoviesListByCategoryProps = { movieCategory: MovieCategoryPage };

export const MoviesListByCategory = async ({ movieCategory: { category, seeMorePath, title } }: MoviesListByCategoryProps) => {
  const response = await getMoviesByCategory({ page: "1", segments: [category] });

  const movies = response?.movies ?? [];

  const firstTenMovies = movies.slice(0, 10);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-foreground text-2xl font-semibold">{title}</h3>

        <Button asChild variant="link">
          <Link href={seeMorePath}>
            See more
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <MoviesList movies={firstTenMovies} className="lg:gap-8" imageHeight="lg:h-[340px]" imageWidth="lg:w-[230px]" />
    </div>
  );
};
