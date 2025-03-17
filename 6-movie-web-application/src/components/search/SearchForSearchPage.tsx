"use client";

import { useRouter } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { ChangeEvent, useState } from "react";

type SearchForSearchPageProps = { isMobile: boolean };

export const SearchForSearchPage = ({ isMobile }: SearchForSearchPageProps) => {
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
    push(`/search?value=${value}`);
  };

  return (
    <div>
      <SearchInput isMobile={isMobile} value={searchValue} handleChange={handleChange} />
    </div>
  );
};
