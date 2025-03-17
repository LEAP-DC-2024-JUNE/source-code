import { MovieImage } from "@/components/movie";
import { BackdropPoster } from "./BackdropPoster";

type BackdropProps = {
  id: number;
  posterPath: string;
  backdropPath: string;
};

export const Backdrop = ({ backdropPath, posterPath, id }: BackdropProps) => {
  return (
    <div className="flex gap-x-8 mb-8">
      <MovieImage posterPath={posterPath} className="relative hidden lg:block w-[290px] h-[428px] rounded" />

      <BackdropPoster backdropPath={backdropPath} id={id} />
    </div>
  );
};
