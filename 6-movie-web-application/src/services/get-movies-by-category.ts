import { AxiosError } from "axios";
import { fetchDataFromTMDB } from "@/utils";
import { CATEGORY_NAMES } from "@/constants";

type CategoryMoviesRequest = {
  page: string;
  segments: string[];
};

export const getMoviesByCategory = async ({ page, segments }: CategoryMoviesRequest) => {
  try {
    const categoryPath = segments.join("/");
    const rawCategoryName = segments.at(-1);
    const formattedCategoryName = rawCategoryName?.replace(/_/g, " ");

    const categoryTitle = CATEGORY_NAMES.includes(String(formattedCategoryName)) ? formattedCategoryName : "More like this";

    const { results: movies = [], total_pages: totalPages = 0 } = await fetchDataFromTMDB<MoviesListResponse>(
      `/movie/${categoryPath}?language=en-US&page=${page}`
    );

    return { movies, totalPages, categoryTitle };
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch data: ${message}`, { data: response?.data, status: response?.status });
  }
};
