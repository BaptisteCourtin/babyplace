const messageAdminModels = require("../models/messageAdmin.models.js");

const postMessageToAdmin = async (req, res) => {
  const result = await messageAdminModels.postMessageToAdmin(req);
  return res.json(result);
}

const getAllMessageToAdmin = async (req, res) => {
  const result = await messageAdminModels.getAllMessageToAdmin();
  return res.json(result);
};

const deleteMessagebyId = async (req, res) => {
  const result = await messageAdminModels.deleteMessagebyId(req);
  return res.json(result);
};

module.exports = {
  postMessageToAdmin,
  getAllMessageToAdmin,
  deleteMessagebyId
};