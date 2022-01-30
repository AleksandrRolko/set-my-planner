import api from "./index";

const getTasks = () => {
  return api.get("/tasks");
}

const getTask = (id) => {
  return api.get(`/tasks/${id}`)
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
  getTask,
  createTask,
  updateTask,
  deleteTask,
}
