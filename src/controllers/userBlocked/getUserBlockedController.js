//Eve
const { UserBlocked } = require("../../db");

const getUserBlockedController = async (email) => {
  const userBlocked = await UserBlocked.findAll({
    where: { email: email },
  });
  if (userBlocked.length > 0) return true;
  else return false;
};

module.exports = { getUserBlockedController };
