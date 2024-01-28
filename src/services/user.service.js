import userDao from "../models/persistence/user.dao";

const addUser = (user) => {
  userDao.insert(user);
};

const getUser = (userId) => {
  return userDao.get(userId);
};
const getAllUsers = () => {
  return userDao.getAllUsers();
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
  getAllUsers,
  removeUser,
  updateUser,
};
