import { useQuery } from "@tanstack/react-query";
import api from "./utils";
import { toast } from "react-toastify";

const useFetchPhotos = ({ searchValue, page = 1, perPage = 15 }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["photos", searchValue, page, perPage],
    enabled: searchValue.length > 0,
    queryFn: async () => {
      const res = await api.get("/search/photos", {
        params: { query: searchValue, page, per_page: perPage },
      });
      return res.data;
    },
    select: (d) => d.results,
    onSuccess: () => {
      toast.success("Photos fetched successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { data, isLoading };
};

export { useFetchPhotos };
