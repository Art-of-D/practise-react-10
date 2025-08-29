import SingleItem from "./SingleItem";
import { useFetchTasks } from "./fetchHooks";

const Items = () => {
  const { data, isLoading, isError, error } = useFetchTasks();
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
