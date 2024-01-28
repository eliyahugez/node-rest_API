import { log } from "console";
import users from "../data/users.data";

const insert = (details) => {
  const newUser = { ...details, id: users.length + 1 };
  users.push(newUser);
  console.log(newUser);
  return true;
};

const getAllUsers = () => {
  return users;
};

const update = (userID, newDetails) => {
  let currentUser = false;
  let userIndex;

  users.map((user, index) => {
    if (user.id === userID) {
      currentUser = user;
      userIndex = index;
    }
  });
  if (!currentUser) {
    return false;
  }

  const updatedUser = Object.assign({}, currentUser, newDetails);

  console.log(currentUser, newDetails);
  users.splice(userIndex, 1, updatedUser);

  return updatedUser;
};

const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      // remove the user(array element) from the found user
      users.splice(index, 1);
      return true;
    }
    return false;
  };

  return users.find(deleteUser);
};

const get = (userId) => {
  const findUser = users.find((user) => {
    if (user.id === userId) {
      return user;
    }
    return null;
  });

  return findUser;
};

export default {
  insert,
  get,
  getAllUsers,
  update,
  remove,
};
