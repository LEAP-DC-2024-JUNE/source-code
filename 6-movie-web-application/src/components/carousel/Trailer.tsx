import YouTube from "react-youtube";
import { Play } from "lucide-react";
import { useFetchDataFromTMDB } from "@/hooks";
import { Dialog, DialogTrigger, DialogContent, Button } from "@/components/ui";

type TrailerProps = { id: number };

export const Trailer = ({ id }: TrailerProps) => {
  const { data } = useFetchDataFromTMDB<MovieVideosResponse>(`/movie/${id}/videos?language=en-US`);

  const movieTrailer = data?.results.find(({ type }) => type === "Trailer");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Play size={16} />
          <h4 className="text-sm">Watch Trailer</h4>
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 border-none">
        <YouTube videoId={movieTrailer?.key} opts={{ width: "100%", height: 280 }} />
      </DialogContent>
    </Dialog>
  );
};
