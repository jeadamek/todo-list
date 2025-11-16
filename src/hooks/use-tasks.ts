import useLocalStorage from "use-local-storage";
import { Task, TASKS_KEY } from "../models/task";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks, 
    taskCount: tasks.length,
    completedTasksCount: tasks.filter((task) => task.completed).length
  }
}