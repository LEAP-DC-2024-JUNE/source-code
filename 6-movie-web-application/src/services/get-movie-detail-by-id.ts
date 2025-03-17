import { AxiosError } from "axios";
import { fetchDataFromTMDB } from "@/utils";

export const getMovieDetailById = async (movieId: string) => {
  try {
    const movieDetails = await fetchDataFromTMDB<MovieDetails>(`/movie/${movieId}?language=en-US`);

    return movieDetails;
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch data: ${message}`, { data: response?.data, status: response?.status });
  }
};
