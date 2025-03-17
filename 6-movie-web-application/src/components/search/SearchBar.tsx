"use client";

import { usePathname } from "next/navigation";
import { SearchForOtherPage } from "./SearchForOtherPage";
import { SearchForSearchPage } from "./SearchForSearchPage";

type SearchBarProps = { isMobile?: boolean };

export const SearchBar = ({ isMobile = true }: SearchBarProps) => {
  const pathname = usePathname();

  return pathname === "/search" ? <SearchForSearchPage isMobile={isMobile} /> : <SearchForOtherPage isMobile={isMobile} />;
};
