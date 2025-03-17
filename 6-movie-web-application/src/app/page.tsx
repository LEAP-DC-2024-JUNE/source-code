import { Suspense } from "react";
import { Home, Carousel, HomePageSkeleton } from "@/components";

const HomePage = () => {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <Carousel />
      <Home />
    </Suspense>
  );
};

export default HomePage;
