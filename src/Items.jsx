import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import api from "./utils";

const Items = ({ items }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await api.get("/tasks");
      return data;
    },
  });

  if (isLoading) return <p style={{ marginTop: "2rem" }}>Loading...</p>;

  if (isError) return <p style={{ marginTop: "2rem" }}>{error.message}</p>;

  return (
    <div className="items">
      {!isLoading &&
        data.taskList.map((item) => {
          return <SingleItem key={item.id} item={item} />;
        })}
    </div>
  );
};
export default Items;
