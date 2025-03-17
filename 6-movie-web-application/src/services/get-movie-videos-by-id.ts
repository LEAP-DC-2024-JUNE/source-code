import { AxiosError } from "axios";
import { fetchDataFromTMDB } from "@/utils";

export const getMovieVideosById = async (movieId: number) => {
  try {
    const { results } = await fetchDataFromTMDB<MovieVideosResponse>(`/movie/${movieId}/videos?language=en-US`);

    const movieTrailer = results.find(({ type }) => type === "Trailer") as VideoDetails;

    return movieTrailer;
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch data: ${message}`, { data: response?.data, status: response?.status });
  }
};
