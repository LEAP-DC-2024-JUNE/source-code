import { Slides } from "./Slides";
import { getMoviesByCategory } from "@/services";

export const Carousel = async () => {
  const response = await getMoviesByCategory({ page: "1", segments: ["now_playing"] });

  const firstTenMovies = (response?.movies as MovieDetails[]).slice(0, 10);

  return <Slides movies={firstTenMovies} />;
};
