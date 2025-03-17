import { AxiosError } from "axios";
import { fetchDataFromTMDB } from "@/utils";

export const getSimilarMoviesById = async (movieId: string) => {
  try {
    const { results } = await fetchDataFromTMDB<MoviesListResponse>(`movie/${movieId}/similar?language=en-US&page=1`);

    return results;
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch data: ${message}`, { data: response?.data, status: response?.status });
  }
};
