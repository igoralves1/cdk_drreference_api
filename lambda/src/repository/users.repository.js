const crateUserRepository = async (user) => {
  try {
    const query = `INSERT INTO users 
  (name, middle_name, last_name, avatar, role, email, email_verified_at, is_active, password)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    const values = [
      user.name,
      user.middle_name,
      user.last_name,
      user.avatar,
      user.role,
      user.email,
      user.email_verified_at,
      user.is_active,
      user.password,
    ];
    //return await pool.query(query, values);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUserRepository = async (user, id) => {
  try {
    const { query, values } = buildUpdateQuery('users', user, id);
    //return await pool.query(query, values);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserRepository = async (id) => {
  try {
    const query = `SELECT * FROM users WHERE id = $1`;
    const values = [id];
    //return await pool.query(query, values);
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUserRepository = async (id) => {
  try {
    const query = `DELETE FROM users WHERE id = $1`;
    const values = [id];
    //return await pool.query(query, values);
  } catch (error) {
    throw new Error(error.message);
  }
};

const listUsersRepository = async () => {
  try {
    const query = `SELECT * FROM users`;
    //return await pool.query(query);
  } catch (error) {
    throw new Error(error.message);
  }
};

const listUsersByPaginationRepository = async (limit, offset) => {
  try {
    const query = `SELECT * FROM users LIMIT $1 OFFSET $2`;
    const values = [offset - limit, limit];
    //return await pool.query(query, values);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  crateUserRepository,
  updateUserRepository,
  getUserRepository,
  deleteUserRepository,
  listUsersRepository,
  listUsersByPaginationRepository,
};
