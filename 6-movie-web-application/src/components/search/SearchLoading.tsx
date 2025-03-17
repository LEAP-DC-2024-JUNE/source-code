"use client";

import { Card } from "../ui";
import Image from "next/legacy/image";

export const SearchLoading = () => {
  return (
    <Card className="search-result flex h-32 items-center justify-center">
      <Image alt="Loading animation" src="/loader.png" width={37} height={37} className="animate-spin" />
    </Card>
  );
};
