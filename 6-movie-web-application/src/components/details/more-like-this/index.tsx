import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { fetchDataFromTMDB } from "@/utils";
import { MoviesList } from "@/components/movie";

type MoreLikeThisProps = { id: number };

export const MoreLikeThis = async ({ id }: MoreLikeThisProps) => {
  const response = await fetchDataFromTMDB<MoviesListResponse>(`movie/${id}/similar?language=en-US&page=1`);

  const { results } = response as MoviesListResponse;

  const firstFiveMovies = results.slice(0, 5);

  return (
    <div className="pb-8 lg:pb-[112.62px]">
      <div className="flex justify-between mb-8">
        <h3 className="text-2xl font-semibold">More like this</h3>

        <Link href={`/category/${id}/similar`}>
          <Button variant="link">
            See more <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      <MoviesList movies={firstFiveMovies} className="lg:gap-8" imageHeight="lg:h-[281px]" imageWidth="lg:w-[190px]" />
    </div>
  );
};
