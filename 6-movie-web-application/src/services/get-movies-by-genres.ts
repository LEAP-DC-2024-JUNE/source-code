import { AxiosError } from "axios";
import { fetchDataFromTMDB } from "@/utils";

export const getMoviesByGenres = async () => {
  try {
    const { genres } = await fetchDataFromTMDB<MovieGenresResponse>(`/genre/movie/list?language=en`);

    return genres;
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch data: ${message}`, { data: response?.data, status: response?.status });
  }
};
// const { data, isLoading } = useFetchData<MoviesResult>(`/discover/movie?language=en&with_genres=${genreIds}&page=${page}`);

// const movies = data?.results ?? [];
// const totalPages = data?.total_pages ?? 0;
// const totalResult = data?.total_results ?? 0;
