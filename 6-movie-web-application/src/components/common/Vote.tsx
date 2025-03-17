import { cn } from "@/lib";
import { Star } from "lucide-react";
import { fixedVoteAverage } from "@/utils";

type VoteProps = {
  size?: 28 | 16;
  withStart?: boolean;
  voteAverage: number;
  voteAverageColor?: string;
};

export const Vote = ({ size = 16, withStart = true, voteAverage, voteAverageColor = "" }: VoteProps) => {
  const formattedVoteAverage = fixedVoteAverage(voteAverage);

  return (
    <div className="flex items-center gap-x-1">
      {withStart && <Star size={size} fill="#fde047" color="#fde047" />}

      <div className="font-medium">
        <span className={cn("text-foreground text-sm", voteAverageColor)}>{formattedVoteAverage}</span>
        <span className="text-muted-foreground text-xs">/10</span>
      </div>
    </div>
  );
};
