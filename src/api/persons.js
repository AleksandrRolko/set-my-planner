import api from "./index";

const getPersons = () => {
  return api.get("/persons");
}

const getPerson = (id) => {
  return api.get(`/persons/${id}`)
}

export {
  getPersons,
  getPerson,
}
