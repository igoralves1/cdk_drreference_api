const Users = require('../repository/users.repository');
const { hashPassword } = require('../util/bcryptPassword');

const crateUserServices = async (user) => {
  try {
    if (!user.name || !user.email || !user.password) {
      throw new Error('Missing required fields');
    }
    user.password = await hashPassword(user.password);
    const createUser = await Users.crateUserRepository(user);
    return createUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUserServices = async (user, id) => {
  try {
    const updateUser = await Users.updateUserRepository(user, id);
    return updateUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserServices = async (id) => {
  try {
    const getUser = await Users.getUserRepository(id);
    return getUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUserServices = async (id) => {
  try {
    const deleteUser = await Users.deleteUserRepository(id);
    return deleteUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const listUsersServices = async () => {
  try {
    const listUsers = await Users.listUsersRepository();
    return listUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};

const listUsersByPaginationServices = async (limit, offset) => {
  try {
    const listUsersByPagination = await Users.listUsersByPaginationRepository(
      limit,
      offset,
    );
    return listUsersByPagination;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  crateUserServices,
  updateUserServices,
  getUserServices,
  deleteUserServices,
  listUsersServices,
  listUsersByPaginationServices,
};
