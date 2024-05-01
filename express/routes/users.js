const { Router } = require("express");
const { getUser, createUser, putUser, deleteUser } = require("../controllers/users");

const router = Router();

router.get("/", getUser);

router.post("/", createUser);

router.put("/", putUser);

router.delete("/", deleteUser);

module.exports = router;