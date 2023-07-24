
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/",getUsers);
router.post("/", createUser);
router.get("/:id", getUserByUserId);
//router.post("/login", login);
router.patch("/", updateUsers);
router.delete("/:id", deleteUser);

module.exports = router;
