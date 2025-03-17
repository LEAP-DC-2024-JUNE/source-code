"use client";

import { Skeleton } from "../ui";

export const CategoryPageSkeleton = () => {
  return (
    <div className="page-primary pt-[59px]">
      <div className="py-8 lg:pt-[52px] lg:pb-[76px] space-y-8">
        <Skeleton className="h-8 lg:h-9 w-[146px] rounded-full" />

        <div className="flex items-center flex-wrap gap-5 lg:gap-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="w-[157.5px] lg:w-[229.73px] h-[309.1px] lg:h-[439px]" />
          ))}
        </div>
      </div>
    </div>
  );
};
