import { Vote } from "@/components/common";
import { convertedVoteCount } from "@/utils";
import { Star } from "lucide-react";

type MovieRatingProps = {
  voteCount: number;
  voteAverage: number;
};

export const MovieRating = ({ voteAverage, voteCount }: MovieRatingProps) => {
  const formattedVoteCount = convertedVoteCount(voteCount);

  return (
    <div className="text-xs">
      <h5 className="hidden lg:block">Rating</h5>

      <div className="flex items-center py-[2px] gap-x-1">
        <Star size={28} fill="#fde047" color="#fde047" />

        <div>
          <Vote voteAverage={voteAverage} withStart={false} />
          <span className="text-muted-foreground">{formattedVoteCount}</span>
        </div>
      </div>
    </div>
  );
};
