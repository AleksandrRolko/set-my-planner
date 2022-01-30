import api from "./index";

const loginUser = ({ email, password }) => {
  return new Promise(resolve => {
    resolve({ status: 200 })
  })
}

const createUser = ({ name, email, password }) => {
  return api.post("/users", { name, email, password })
}

export {
  createUser,
  loginUser,
}
