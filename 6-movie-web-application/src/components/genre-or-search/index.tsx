import { cn } from "@/lib";
import { Separator } from "../ui";
import { GenreHeader } from "../genre/GenreHeader";

type GenresOrSearchProps = {
  title: string;
  reverse?: boolean;
  wrapperTitle: string;
  genres: React.ReactNode;
  movies: React.ReactNode;
};

export const GenresOrSearch = ({ genres, movies, title, wrapperTitle, reverse = false }: GenresOrSearchProps) => {
  return (
    <section className="page-primary pt-[59px]">
      <div className="py-8 lg:pt-[52px]">
        <h2 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">{wrapperTitle}</h2>

        <div className={cn("flex", reverse ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row space-y-8 lg:space-y-0")}>
          <div className={cn("static h-fit w-full lg:sticky lg:top-[111px] lg:w-[387px]", reverse && "mt-8 lg:mt-0")}>
            <div className="space-y-5">
              <GenreHeader title={title} />
              {genres}
            </div>
          </div>

          <Separator orientation="vertical" className="hidden lg:block border h-screen mx-4" />

          {movies}
        </div>
      </div>
    </section>
  );
};
