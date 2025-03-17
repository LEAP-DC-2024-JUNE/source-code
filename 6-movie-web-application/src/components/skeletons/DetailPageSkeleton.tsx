"use client";

import { Skeleton, Separator } from "../ui";

export const DetailPageSkeleton = () => {
  return (
    <div className="pt-[59px] mx-auto max-w-screen-sxl min-h-screen">
      <div className="my-8 lg:mt-[52px] lg:mb-[112.62px]">
        <div className="flex justify-between mb-4 lg:mb-5 px-5 lg:px-0">
          <div className="space-y-1">
            <Skeleton className="w-[144px] h-[30px] rounded-full" />
            <Skeleton className="w-[181px] h-[18px] rounded-full" />
          </div>
          <div className="space-y-1">
            <Skeleton className="w-[83px] h-4 rounded-full" />
            <Skeleton className="w-[83px] h-5 rounded-full" />
            <Skeleton className="w-[83px] h-4 rounded-full" />
          </div>
        </div>

        <div className="flex gap-x-8">
          <Skeleton className="hidden lg:block w-[290px] h-[428px]" />
          <Skeleton className="h-[211px] lg:h-[428px] flex-1" />
        </div>

        <div className="my-8">
          <div className="hidden lg:flex items-center gap-x-3 mb-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-5 w-20 rounded-full" />
            ))}
          </div>

          <div className="hidden lg:block space-y-1">
            <Skeleton className="h-[22px] w-full rounded-full" />
            <Skeleton className="h-[22px] w-[699px] rounded-full" />
          </div>

          <div className="flex gap-x-[34px] px-5 lg:hidden">
            <Skeleton className="w-[100px] h-[148px]" />

            <div className="w-[201px]">
              <div className="flex items-center flex-wrap gap-3 mb-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-5 w-20 rounded-full" />
                ))}
              </div>

              <div className="space-y-1 mt-5">
                <Skeleton className="h-5 flex-1 rounded-full" />
                <Skeleton className="h-5 flex-1 rounded-full" />
                <Skeleton className="h-5 flex-1 rounded-full" />
                <Skeleton className="h-5 w-[171px] rounded-full" />
                <Skeleton className="h-5 w-[120px] rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-5 mt-5 px-5 lg:px-0">
            <div className="space-y-2 pb-1">
              <div className="flex items-center gap-x-[53px]">
                <Skeleton className="w-16 h-7 rounded-full" />
                <Skeleton className="w-[137px] h-7 rounded-full" />
              </div>

              <Separator />
            </div>
            <div className="space-y-2 pb-1">
              <div className="flex items-center gap-x-[53px]">
                <Skeleton className="w-16 h-7 rounded-full" />
                <Skeleton className="w-[360px] h-7 rounded-full" />
              </div>

              <Separator />
            </div>
            <div className="space-y-2 pb-1">
              <div className="flex items-center gap-x-[53px]">
                <Skeleton className="w-16 h-7 rounded-full" />
                <Skeleton className="w-[355px] h-7 rounded-full" />
              </div>

              <Separator />
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 lg:px-0 max-w-screen-xl space-y-8">
          <div className="flex justify-between">
            <Skeleton className="w-[145px] lg:w-[250px] h-8 rounded-full" />
            <Skeleton className="w-[125px] lg:w-[165px] h-9 rounded-full" />
          </div>

          <div className="flex items-center flex-wrap gap-5 lg:gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="w-[157.5px] lg:w-[190px] h-[309.1px] lg:h-[372.38px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
