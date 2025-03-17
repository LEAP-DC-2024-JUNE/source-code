"use client";

import { GenreHeader } from "./GenreHeader";
import { AllMovieGenres } from "./AllMovieGenres";
import { GenreDropdownTriggerButton } from "./GenreDropdownTriggerButton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, Separator } from "@/components/ui";

type GenreDropdownProps = {
  showLabel?: boolean;
};

export const GenreDropdown = ({ showLabel = true }: GenreDropdownProps) => {
  return (
    <DropdownMenu>
      <GenreDropdownTriggerButton showLabel={showLabel} />

      <DropdownMenuContent align="start" className="p-5 space-y-4 w-[335px] sm:w-[577px]">
        <GenreHeader title="Genres" />

        <Separator className="border-border border" />

        <DropdownMenuItem className="p-0 hover:!bg-transparent">
          <AllMovieGenres />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
