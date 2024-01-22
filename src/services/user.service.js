import userDao from "../models/persistence/user.dao";

const addUser = (userId) => {
  userDao.get(userId);
};

const getUser = (details) => {
  return userDao.insert(details);
};

const updateUser = (userId, details) => {
  return userDao.update(userId, details);
};

const removeUser = (userId) => {
  userDao.remove(userId);
};

export default {
  addUser,
  getUser,
  removeUser,
  updateUser,
};
