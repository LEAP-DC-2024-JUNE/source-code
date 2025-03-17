"use client";

import { motion } from "framer-motion";
import { SearchBar } from "@/components/search";
import { GenreDropdown } from "@/components/genre";
import { CloseMobileSearchBar } from "./CloseMobileSearchBar";
import { searchBarAnimationVariants, searchBarTransitionSettings } from "@/constants";

type MobileSearchBarProps = { toggleSearchBar: () => void };

export const MobileHeaderSlide = ({ toggleSearchBar }: MobileSearchBarProps) => {
  return (
    <motion.div
      exit="exit"
      initial="hidden"
      animate="visible"
      variants={searchBarAnimationVariants}
      transition={searchBarTransitionSettings}
      className="absolute top-0 left-0 flex h-[59px] items-center justify-between px-5 bg-background w-full"
    >
      <div className="flex items-center gap-x-3">
        <GenreDropdown showLabel={false} />
        <SearchBar />
      </div>

      <CloseMobileSearchBar toggleSearchBar={toggleSearchBar} />
    </motion.div>
  );
};
