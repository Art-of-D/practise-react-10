import { useQuery } from "@tanstack/react-query";
import api from "./utils";
import { toast } from "react-toastify";

const useFetchPhotos = ({ searchValue }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["query", searchValue],
    queryFn: async () => {
      const { data } = await api.get("/search/photos");
      return data;
    },
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
