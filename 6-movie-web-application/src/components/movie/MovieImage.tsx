"use client";

import { cn } from "@/lib";
import { ClassValue } from "clsx";
import Image from "next/legacy/image";

type MovieImageProps = {
  posterPath: string;
  imageWidth?: string;
  className: ClassValue;
};

export const MovieImage = ({ posterPath, imageWidth = "w300", className }: MovieImageProps) => {
  const imageUrl = `${process.env.TMDB_IMAGE_SERVICE_URL}/${imageWidth}${posterPath}`;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={imageUrl} layout="fill" alt="poster" priority objectFit="cover" />
      <div className="absolute inset-0 z-10 transition-all duration-300 group-hover:bg-primary/30" />
    </div>
  );
};
