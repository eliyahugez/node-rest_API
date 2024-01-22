import users from "../data/users.data";

const insert = (details) => {
  const newUser = { ...details, id: users.length + 1 };
  users.push(newUser);
  return true;
};

const getAllUsers = () => {
  return users;
};

const update = (newDetails) => {
  users.map((user, index) => {
    if (user.id === newDetails.id) {
    }
  });
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
