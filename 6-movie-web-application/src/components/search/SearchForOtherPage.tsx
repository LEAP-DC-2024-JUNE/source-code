"use client";

import { SearchInput } from "./SearchInput";
import { SearchResultsList } from "./SearchResultsList";
import { ChangeEvent, useState, useRef, useEffect } from "react";

type SearchForOtherPageProps = { isMobile: boolean };

export const SearchForOtherPage = ({ isMobile }: SearchForOtherPageProps) => {
  const searchInputRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const removeSearchValue = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        removeSearchValue();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchInputRef}>
      <SearchInput isMobile={isMobile} value={searchValue} handleChange={handleChange} />
      {searchValue && <SearchResultsList searchValue={searchValue} removeSearchValue={removeSearchValue} />}
    </div>
  );
};
