import api from "./index";

const loginUser = ({ email, password }) => {
  return new Promise(resolve => {
    resolve({ data: { token: "some-token" } })
  })
}

const createUser = ({ name, email, password }) => {
  return api.post("/users", { name, email, password })
}

export {
  createUser,
  loginUser,
}
