import api from "./index";

const getTasks = () => {
  return api.get("/tasks");
}

const createTask = (task) => {
  return api.post('/tasks', task)
}

const updateTask = (task) => {
  return api.put(`/tasks/${task.id}`, task);
}

const deleteTask = (id) => {
  return api.delete(`/tasks/${id}`)
}

export {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}
