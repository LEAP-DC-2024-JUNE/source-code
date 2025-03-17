import { movieCategories } from "@/constants";
import { MoviesListByCategory } from "./MoviesListByCategory";

export const Home = () => {
  return (
    <section className="page-primary py-8 lg:py-13 space-y-8 lg:space-y-13">
      {movieCategories.map((movieCategory, index) => (
        <MoviesListByCategory key={index} movieCategory={movieCategory} />
      ))}
    </section>
  );
};
