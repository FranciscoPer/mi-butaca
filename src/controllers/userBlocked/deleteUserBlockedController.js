const { UserBlocked } = require("../../db");


const deleteUserBlockedController = async (id) => {
  const deletedUserBlocked = await UserBlocked.destroy({
    where: {
      userID: id,
    },
  });

  return "Usuario bloqueado eliminado correctamente";
};

module.exports = { deleteUserBlockedController };
