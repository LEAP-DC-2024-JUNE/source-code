"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui";
import { AnimatePresence } from "framer-motion";
import { MobileHeaderSlide } from "./MobileHeaderSlide";

export const ShowMobileSearchBar = () => {
  const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setIsSearchBarActive((previouState) => !previouState);
  };

  return (
    <div className="sm:hidden">
      <Button variant="outline" size="icon" onClick={toggleSearchBar}>
        <Search size={16} />
      </Button>

      <AnimatePresence>{isSearchBarActive && <MobileHeaderSlide toggleSearchBar={toggleSearchBar} />}</AnimatePresence>
    </div>
  );
};
