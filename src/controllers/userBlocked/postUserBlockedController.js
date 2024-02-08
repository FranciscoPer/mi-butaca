const { UserBlocked} = require("../../db");

const postUserBlockedController = async (userID, email) => {
  const newUserBlocked = await UserBlocked.create({
    userID: userID,
    email: email,
  });
  return "Usuario bloqueado con éxito";
};

module.exports = { postUserBlockedController };
