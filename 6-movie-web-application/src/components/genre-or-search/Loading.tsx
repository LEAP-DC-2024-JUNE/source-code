"use client";

import Image from "next/legacy/image";

export const Loading = () => {
  return (
    <div className="h-[95px] flex items-center justify-center flex-1">
      <Image alt="Loading animation" src="/loader.png" width={37} height={37} className="animate-spin" />
    </div>
  );
};
