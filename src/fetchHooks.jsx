import { useQuery, useMutation } from "@tanstack/react-query";
import api from "./utils";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const useFetchTasks = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await api.get("/tasks");
      return data;
    },
  });
  return { data, isLoading, isError, error };
};

const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isPendingCreateTask } = useMutation({
    mutationFn: (taskTitle) => api.post("/tasks", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isPendingCreateTask };
};
const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isPendingDeleteTask } = useMutation({
    mutationFn: (taskId) => {
      return api.delete(`/tasks/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask, isPendingDeleteTask };
};

const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask, isPendingUpdateTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return api.patch(`/tasks/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { editTask, isPending: isPendingUpdateTask };
};

export { useFetchTasks, useCreateTask, useDeleteTask, useUpdateTask };
