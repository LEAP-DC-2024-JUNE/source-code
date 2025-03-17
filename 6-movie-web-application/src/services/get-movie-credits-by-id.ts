import { AxiosError } from "axios";
import { fetchDataFromTMDB, getNamesByRole } from "@/utils";

export const getMovieCreditsById = async (movieId: number) => {
  try {
    const { cast, crew } = await fetchDataFromTMDB<MovieCreditsResponse>(`/movie/${movieId}/credits?language=en-US`);

    const actors = getNamesByRole(cast, "Acting");
    const writers = getNamesByRole(crew, "Writer");
    const directors = getNamesByRole(crew, "Director");

    return { actors, writers, directors };
  } catch (error: unknown) {
    const { message, response } = error as AxiosError;

    console.error(`Failed to fetch data: ${message}`, { data: response?.data, status: response?.status });
  }
};
