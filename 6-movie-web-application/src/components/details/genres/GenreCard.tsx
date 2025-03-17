import { Badge } from "@/components/ui";

type GenreCardProps = { genre: MovieGenre };

export const GenreCard = ({ genre: { name } }: GenreCardProps) => {
  return (
    <Badge variant="outline" className="rounded-full text-xs">
      {name}
    </Badge>
  );
};
