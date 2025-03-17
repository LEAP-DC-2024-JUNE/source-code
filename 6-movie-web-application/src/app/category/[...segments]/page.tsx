import { Suspense } from "react";
import { CategoryPageSkeleton, Category } from "@/components";

const MovieCategory = ({ params: { segments }, searchParams: { page = "1" } }: PageRouteParams) => {
  return (
    <Suspense fallback={<CategoryPageSkeleton />}>
      <Category page={page} segments={segments} />
    </Suspense>
  );
};

export default MovieCategory;
