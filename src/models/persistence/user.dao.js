import { log } from "console";
import users from "../data/users.data";

const insert = (details) => {
  const newUser = { id: users.length + 1, ...details };
  users.push(newUser);
  return true;
};

const getAllUsers = () => users;

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
  // const userToReomove = users.find((user) => user.id === userId);

  const deleteUser = (user, index) => {
    // user = userToReomove;
    if (user?.id === userId) {
      // remove the user(array element) from the found user
      users.splice(index, 1);
    }
  };

  return users.find(deleteUser);
};

const get = (userId) => users.find((user) => user.id === userId);

export default {
  insert,
  get,
  getAllUsers,
  update,
  remove,
};
