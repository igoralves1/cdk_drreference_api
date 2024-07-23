const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const comparePassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

const salt = bcrypt.genSaltSync(saltRounds);
console.log(hash);
module.exports = {
  hashPassword,
  comparePassword,
};
