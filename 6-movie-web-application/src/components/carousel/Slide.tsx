import Link from "next/link";
import { MovieImage } from "../movie";
import { AboutMovie } from "./AboutMovie";

type SlideProps = { slide: MovieDetails };

export const Slide = ({ slide }: SlideProps) => {
  const { backdrop_path, vote_average, original_title, overview, id } = slide;

  return (
    <div className="relative">
      <Link href={`/details/${id}`}>
        <MovieImage imageWidth="original" posterPath={backdrop_path} className="h-[246px] lg:h-150" />
      </Link>

      <AboutMovie overview={overview} voteAverage={vote_average} title={original_title} id={id} />
    </div>
  );
};
