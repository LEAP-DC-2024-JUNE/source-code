import { axiosInstance } from "@/lib";

export const fetchDataFromTMDB = async <T>(endpoint: string): Promise<T> => {
  const { data } = await axiosInstance.get<T>(endpoint);
 
  return data;
};
