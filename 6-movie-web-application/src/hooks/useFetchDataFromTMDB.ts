import useSWR from "swr";
import { fetchDataFromTMDB } from "@/utils";

export const useFetchDataFromTMDB = <T>(endPoint: string) => {
  const { data, isLoading } = useSWR<T>(endPoint, fetchDataFromTMDB);

  return { data, isLoading };
};
