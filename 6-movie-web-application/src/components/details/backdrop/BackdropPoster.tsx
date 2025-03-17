import { TrailerModal } from "./TrailerModal";
import { MovieImage } from "@/components/movie";
import { getMovieVideosById } from "@/services";

type BackdropPosterProps = {
  id: number;
  backdropPath: string;
};

export const BackdropPoster = async ({ backdropPath, id }: BackdropPosterProps) => {
  const trailer = await getMovieVideosById(id);

  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 bg-black/40" />
      <MovieImage imageWidth="original" posterPath={backdropPath} className="w-[375px] lg:w-[760px] h-[211px] lg:h-[428px] lg:rounded" />

      <div className="absolute left-6 bottom-6 z-20">
        <TrailerModal trailer={trailer} />
      </div>
    </div>
  );
};
