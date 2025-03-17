import { MoviesList } from "../movie";
import { getMoviesByCategory } from "@/services";
import { DynamicPagination, NoResultsFound } from "../common";

type CategoryProps = {
  page: string;
  segments: string[];
};

export const Category = async ({ page, segments }: CategoryProps) => {
  const response = await getMoviesByCategory({ page, segments });

  if (!response) return <NoResultsFound />;

  const { categoryTitle, movies, totalPages } = response;

  return (
    <section className="page-primary pt-[59px] pb-8 lg:pb-[76px] space-y-8">
      <h2 className="mt-8 text-2xl font-medium capitalize text-foreground lg:mt-[52px] lg:text-3xl">{categoryTitle}</h2>

      <MoviesList movies={movies} className="lg:gap-8" imageHeight="lg:h-[340px]" imageWidth="lg:w-[230px]" />

      <DynamicPagination totalPages={totalPages} />
    </section>
  );
};
