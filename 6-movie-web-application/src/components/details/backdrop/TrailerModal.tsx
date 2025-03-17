"use client";

import YouTube from "react-youtube";
import { Play } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, Button } from "@/components/ui";

type TrailerModalProps = { trailer?: VideoDetails };

export const TrailerModal = ({ trailer }: TrailerModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center space-x-3 text-white">
          <Button size="icon" className="rounded-full bg-white hover:bg-gray-200">
            <Play size={16} color="black" />
          </Button>
          <span>Play trailer</span>
          <span>1:30</span>
        </div>
      </DialogTrigger>

      {trailer && (
        <DialogContent className="border-none p-0">
          <YouTube videoId={trailer.key} opts={{ width: "100%", height: 280 }} />
        </DialogContent>
      )}
    </Dialog>
  );
};
