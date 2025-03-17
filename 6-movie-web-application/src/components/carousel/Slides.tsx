"use client";

import { Slide } from "./Slide";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui";

type SlidesProps = { movies: MovieDetails[] };

export const Slides = ({ movies }: SlidesProps) => {
  return (
    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} className="relative mt-[59px] lg:mt-[83px] w-screen overflow-hidden">
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <Slide slide={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-11" />
      <CarouselNext className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-11" />
    </Carousel>
  );
};
