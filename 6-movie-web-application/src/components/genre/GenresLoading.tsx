"use client";

import Image from "next/legacy/image";

export const GenresLoading = () => {
  return (
    <div className="flex w-full justify-center">
      <Image alt="Loading animation" src="/loader.png" width={37} height={37} className="animate-spin" />
    </div>
  );
};
