"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui";

type CloseMobileSearchBarProps = { toggleSearchBar: () => void };

export const CloseMobileSearchBar = ({ toggleSearchBar }: CloseMobileSearchBarProps) => {
  return (
    <Button variant="ghost" size="icon" onClick={toggleSearchBar}>
      <X />
    </Button>
  );
};
