import { use } from "react";
import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import api from "./utils";

const Items = ({ items }) => {
  const response = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await api.get("/tasks");
      return res.data;
    },
  });

  console.log(response);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
