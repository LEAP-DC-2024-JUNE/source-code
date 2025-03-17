import { formattedDate, convertRuntimeIntoHours } from "@/utils";

type MovieTitleProps = {
  runtime: number;
  releaseDate: string;
  originalTitle: string;
};

export const MovieTitle = ({ originalTitle, releaseDate, runtime }: MovieTitleProps) => {
  const runtimeInHours = convertRuntimeIntoHours(runtime);
  const releaseDateFormatted = formattedDate(releaseDate);

  return (
    <div className="space-y-1">
      <h1 className="break-words text-2xl font-bold w-52 lg:w-fit lg:text-4xl">{originalTitle}</h1>
      <h4 className="text-sm lg:text-lg">
        {releaseDateFormatted} · PG · {runtimeInHours}
      </h4>
    </div>
  );
};
